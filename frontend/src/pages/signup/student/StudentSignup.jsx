import React, { useState } from "react";
import "./studentSignup.css";
import { PiGenderIntersexDuotone, PiStudentLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import dashboardPreview from "../../../assets/images/dashboard-preview.png";
import { useAuth } from "../../../context/AuthContext";

const StudentSignup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const emptyInputs =
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.gender ||
        !formData.password;

      if (emptyInputs) {
        alert("Ensure all input fields are filled.");
        return;
      }

      if (formData.password.length < 8) {
        alert("Password must be atleast 8 chars.");
        return;
      }

      await signup(formData);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container student">
      <div className="signup-form-section">
        <div className="signup-form-content">
          <h1 className="signup-title">Student's Signup</h1>
          <p className="signup-subtitle">
            The future of academic scheduling starts now
          </p>

          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <div className="input-field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <span className="input-icon">
                <PiStudentLight />
              </span>
              <input
                type="text"
                name="email"
                placeholder="Student Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field">
              <span className="input-icon">
                <PiGenderIntersexDuotone />
              </span>
              <select
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
            </div>

            <div className="input-field password-field">
              <span className="input-icon">
                <CiLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>

            <div className="terms-text">
              By creating an account, you agreeing to our{" "}
              <a href="#" className="policy-link">
                Privacy Policy
              </a>
              , and{" "}
              <a href="#" className="policy-link">
                Electronics Communication Policy
              </a>
              .
            </div>

            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>

          <div className="flex items-center justify-between signup-page-footer">
            <Link>
              <p>Privacy Policy</p>
            </Link>

            <Link>
              <p>Copyright 2025</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="dashboard-preview-section">
        <div className="dashboard-preview">
          <div className="dashboard-preview-image">
            <img src={dashboardPreview} alt="dashboard preview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
