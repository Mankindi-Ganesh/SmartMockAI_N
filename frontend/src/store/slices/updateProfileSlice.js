import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const updateProfileSlice = createSlice({
  name: "updateProfile",

  initialState: {
    loading: false,
    error: null,
    isUpdated: false,
  },

  reducers: {
    updateProfileRequest(state) {
      state.loading = true;
      state.error = null;
    },

    updateProfileSuccess(state) {
      state.loading = false;
      state.isUpdated = true;
      state.error = null;
    },

    updateProfileFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isUpdated = false;
    },

    updatePasswordRequest(state) {
      state.loading = true;
      state.error = null;
    },

    updatePasswordSuccess(state) {
      state.loading = false;
      state.isUpdated = true;
      state.error = null;
    },

    updatePasswordFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isUpdated = false;
    },

    profileResetAfterUpdate(state) {
      state.loading = false;
      state.error = null;
      state.isUpdated = false;
    },
  },
});


// ================= UPDATE PROFILE =================

export const updateProfile = (data) => async (dispatch) => {
  dispatch(updateProfileSlice.actions.updateProfileRequest());

  try {
    await axios.put(
      "http://localhost:4000/api/v1/user/update/profile",
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch(updateProfileSlice.actions.updateProfileSuccess());

  } catch (error) {
    dispatch(
      updateProfileSlice.actions.updateProfileFailed(
        error?.response?.data?.message ||
        error.message ||
        "Failed to update profile"
      )
    );
  }
};


// ================= UPDATE PASSWORD =================

export const updatePassword = (data) => async (dispatch) => {
  dispatch(updateProfileSlice.actions.updatePasswordRequest());

  try {
    await axios.put(
      "http://localhost:4000/api/v1/user/update/password",
      data,   // must be { oldPassword, newPassword, confirmPassword }
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(updateProfileSlice.actions.updatePasswordSuccess());

  } catch (error) {
    dispatch(
      updateProfileSlice.actions.updatePasswordFailed(
        error?.response?.data?.message ||
        error.message ||
        "Failed to update password"
      )
    );
  }
};


// ================= CLEAR ERRORS =================

export const clearAllUpdateProfileErrors = () => (dispatch) => {
  dispatch(updateProfileSlice.actions.profileResetAfterUpdate());
};

export default updateProfileSlice.reducer;