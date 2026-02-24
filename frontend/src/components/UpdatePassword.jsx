import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAllUpdateProfileErrors,
  updatePassword,
} from "../store/slices/updateProfileSlice";
import { getUser } from "../store/slices/userSlice";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, isUpdated } = useSelector(
    (state) => state.updateProfile
  );

  const dispatch = useDispatch();

  // ✅ SEND JSON (NOT FormData)
  const handleUpdatePassword = () => {
    dispatch(
      updatePassword({
        oldPassword,
        newPassword,
        confirmPassword,
      })
    );
  };

  // ✅ FIXED success + error logic
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }

    if (isUpdated) {
      toast.success("Password Updated Successfully");
      dispatch(getUser());
      dispatch(clearAllUpdateProfileErrors());

      // clear inputs
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  }, [dispatch, error, isUpdated]);

  return (
    <div className="account_components update_password_component">
      <h3>Update Password</h3>

      <div>
        <label>Current Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>

      <div>
        <label>New Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="save_change_btn_wrapper">
        <button
          className="btn"
          onClick={handleUpdatePassword}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;