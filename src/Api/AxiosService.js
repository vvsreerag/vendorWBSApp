import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "<YOUR_BASE_API_URL>";

const AxiosService = axios.create({
  baseURL: API_URL,
  responseType: "json",
  withCredentials: true,
});

export const setAuthToken = async (token, refreshToken) => {
  if (token) {
    await AsyncStorage.setItem("access_token", token);
    await AsyncStorage.setItem("refresh_token", refreshToken);
    AxiosService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    delete AxiosService.defaults.headers.common["Authorization"];
  }
};
AxiosService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.response.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = await AsyncStorage.getItem("refresh_token");
        const response = await axios.post(API_URL + "/refresh-token", {
          token: refreshToken,
        });
        if (response.status === 200) {
          const { access_token, refresh_token } = response.data;
          setAuthToken(access_token, refresh_token);
          originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
          return AxiosService(originalRequest);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosService;
