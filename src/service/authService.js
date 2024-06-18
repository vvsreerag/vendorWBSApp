import AxiosService from "../Api/AxiosService";

const login = (data) => {
  return AxiosService.post("/login", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export default {
  login,
};
