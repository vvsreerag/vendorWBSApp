import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initAuthState = async () => {
  let loggedUser = await AsyncStorage.getItem("logged_user");
};

const initialState = {
  loggedIn: false,
  token: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "authentication/vendorLogin",
  async (data) => {
    const response = data;
    return response;
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.loggedIn = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        const { error, token } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.token = token;
          state.loggedIn = true;
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.loggedIn = false;
      });
  },
});

export const { logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
