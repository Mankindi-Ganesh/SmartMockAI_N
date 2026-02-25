import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout, clearAllUserErrors } from "../store/slices/userSlice";
import { LuMoveRight } from "react-icons/lu";

import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import MyJobs from "../components/MyJobs";
import JobPost from "../components/JobPost";
import Applications from "../components/Applications";
import MyApplications from "../components/MyApplications";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeComponent, setActiveComponent] = useState("MyProfile");

  const { isAuthenticated, error, user } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully.");
  };

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }

    if (!isAuthenticated) navigate("/");
  }, [error, isAuthenticated, dispatch, navigate]);

  /* ================= COMPONENT MAP ================= */
  const componentMap = {
    MyProfile: <MyProfile />,
    UpdateProfile: <UpdateProfile />,
    UpdatePassword: <UpdatePassword />,
    JobPost: <JobPost />,
    MyJobs: <MyJobs />,
    Applications: <Applications />,
    MyApplications: <MyApplications />,
  };

  /* ================= MENU BUTTON HELPER ================= */
  const renderMenuButton = (key, label) => (
    <button
      className={`sidebar-btn ${
        activeComponent === key ? "active" : ""
      }`}
      onClick={() => setActiveComponent(key)}
    >
      {label}
    </button>
  );

  return (
    <section className="dashboard-wrapper">
      {/* ===== HEADER ===== */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>
          Welcome back, <span>{user?.name}</span>
        </p>
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="dashboard-body">
        
        {/* ===== SIDEBAR ===== */}
        <aside className={`dashboard-sidebar ${showSidebar ? "" : "collapse"}`}>
          <h4>Manage Account</h4>

          {renderMenuButton("MyProfile", "My Profile")}
          {renderMenuButton("UpdateProfile", "Update Profile")}
          {renderMenuButton("UpdatePassword", "Update Password")}

          {user?.role === "Employer" && (
            <>
              {renderMenuButton("JobPost", "Post Job")}
              {renderMenuButton("MyJobs", "My Jobs")}
              {renderMenuButton("Applications", "Applications")}
            </>
          )}

          {user?.role === "Job Seeker" &&
            renderMenuButton("MyApplications", "My Applications")}

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </aside>

        {/* ===== CONTENT ===== */}
        <main className="dashboard-main">
          
          <div
  className={`sidebar-toggle ${showSidebar ? "open" : ""}`}
  onClick={() => setShowSidebar(!showSidebar)}
>
  {showSidebar ? <LuMoveRight style={{ transform: "rotate(180deg)" }} /> : <LuMoveRight />}
</div>

          {/* Content Card */}
          <div className="dashboard-content-card">
            {componentMap[activeComponent]}
          </div>

        </main>
      </div>
    </section>
  );
};

export default Dashboard;