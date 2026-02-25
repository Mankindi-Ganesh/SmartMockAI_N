import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegsiter = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated, message]);

  return (
    <>
     <section className="authPage">
  <div className="authCard registerCard">
    <h2>Create a new account</h2>

    <form onSubmit={handleRegsiter}>

      {/* ROLE + NAME */}
      <div className="formGrid">
        <div className="inputGroup">
          <label>Register As</label>
          <div className="inputWrapper">
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="Employer">Register as Employer</option>
              <option value="Job Seeker">Register as Job Seeker</option>
            </select>
            <FaRegUser className="inputIcon" />
          </div>
        </div>

        <div className="inputGroup">
          <label>Name</label>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FaPencilAlt className="inputIcon" />
          </div>
        </div>
      </div>

      {/* EMAIL + PHONE */}
      <div className="formGrid">
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

        <div className="inputGroup">
          <label>Phone</label>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="111-222-333"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FaPhoneFlip className="inputIcon" />
          </div>
        </div>
      </div>

      {/* ADDRESS + PASSWORD */}
      <div className="formGrid">
        <div className="inputGroup">
          <label>Address</label>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <FaAddressBook className="inputIcon" />
          </div>
        </div>

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
      </div>

      {/* JOB SEEKER FIELDS */}
      {role === "Job Seeker" && (
        <>
          <div className="formGrid">
            {[firstNiche, secondNiche, thirdNiche].map((value, i) => (
              <div className="inputGroup" key={i}>
                <label>Niche {i + 1}</label>
                <div className="inputWrapper">
                  <select
                    value={value}
                    onChange={(e) =>
                      i === 0
                        ? setFirstNiche(e.target.value)
                        : i === 1
                        ? setSecondNiche(e.target.value)
                        : setThirdNiche(e.target.value)
                    }
                  >
                    <option value="">Select Niche</option>
                    {nichesArray.map((n, index) => (
                      <option key={index} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <MdCategory className="inputIcon" />
                </div>
              </div>
            ))}
          </div>

          <div className="inputGroup">
            <label>Cover Letter</label>
            <textarea
              rows="5"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label>Resume</label>
            <input type="file" onChange={resumeHandler} />
          </div>
        </>
      )}

      <button className="authButton" disabled={loading}>
        {loading ? "Creating Account..." : "Register"}
      </button>

      <p className="authFooter">
        Already have an account? <Link to="/login">Login Now</Link>
      </p>

    </form>
  </div>
</section>
    </>
  );
};

export default Register;
