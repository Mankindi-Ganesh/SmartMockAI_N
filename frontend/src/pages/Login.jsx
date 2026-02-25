import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, login } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated]);

  return (
    <>
     <section className="authPage">
  <div className="authCard">
    <h2>Login to your account</h2>

    <form onSubmit={handleLogin}>

      {/* Role */}
      <div className="inputGroup">
        <label>Login As</label>
        <div className="inputWrapper">
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Employer">Login as an Employer</option>
            <option value="Job Seeker">Login as a Job Seeker</option>
          </select>
<FaRegUser className="inputIcon left" />
<span className="selectArrow">⌄</span>        </div>
      </div>

      {/* Email */}
      <div className="inputGroup">
        <label>Email</label>
        <div className="inputWrapper">
          <input
            type="email"
            placeholder="youremail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MdOutlineMailOutline className="inputIcon" />
        </div>
      </div>

      {/* Password */}
      <div className="inputGroup">
        <label>Password</label>
        <div className="inputWrapper">
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <RiLock2Fill className="inputIcon" />
        </div>
      </div>

      <button className="authButton" type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="authFooter">
        Don't have an account? <Link to="/register">Register Now</Link>
      </p>

    </form>
  </div>
</section>
    </>
  );
};

export default Login;
