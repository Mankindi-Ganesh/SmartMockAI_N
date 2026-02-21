import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
    message: null,
  },

  reducers: {
    request(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },

    authSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    fetchSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    logoutSuccess(state) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.message = null;
    },

    failed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    clearAllErrors(state) {
      state.error = null;
      state.message = null;
    },
  },
});

export const {
  request,
  authSuccess,
  fetchSuccess,
  logoutSuccess,
  failed,
  clearAllErrors,
} = userSlice.actions;

/* ================= REGISTER ================= */
export const register = (formData) => async (dispatch) => {
  dispatch(request());
  try {
    const res = await axios.post(
      "/api/v1/user/register",
      formData,
      { withCredentials: true }
    );
    dispatch(authSuccess(res.data));
  } catch (err) {
    dispatch(failed(err.response?.data?.message || "Registration failed"));
  }
};

/* ================= LOGIN ================= */
export const login = (formData) => async (dispatch) => {
  dispatch(request());
  try {
    const res = await axios.post(
      "/api/v1/user/login",
      formData,
      { withCredentials: true }
    );
    dispatch(authSuccess(res.data));
  } catch (err) {
    dispatch(failed(err.response?.data?.message || "Login failed"));
  }
};

/* ================= LOAD USER ================= */
export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "/api/v1/user/getuser",
      { withCredentials: true }
    );
    dispatch(fetchSuccess(res.data.user));
  } catch {
    // user not logged in → silent fail
    dispatch(logoutSuccess());
  }
};

/* ================= LOGOUT ================= */
export const logout = () => async (dispatch) => {
  try {
    await axios.get(
      "/api/v1/user/logout",
      { withCredentials: true }
    );
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(failed(err.response?.data?.message || "Logout failed"));
  }
};

/* ================= CLEAR ERRORS ================= */
export const clearAllUserErrors = () => (dispatch) => {
  dispatch(clearAllErrors());
};

export default userSlice.reducer;
