import React, { useState } from 'react'
import "./studentSignup.css"
import { PiStudentLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Link } from 'react-router-dom';
import dashboardPreview from "../../../assets/images/dashboard-preview.png"

const StudentSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    matricNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', formData);
  };
  return (
    <div className="signup-container student">
      <div className="signup-form-section">
        <div className="signup-form-content">
          <h1 className="signup-title">Student's Signup</h1>
          <p className="signup-subtitle">The future of academic scheduling starts now</p>

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
                name="matricNumber"
                placeholder="UTME or Matric Number"
                value={formData.matricNumber}
                onChange={handleChange}
                required
              />
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
                {showPassword ? (
                  <IoEyeOffOutline />

                ) : (
                  <IoEyeOutline />
                )}
              </span>
            </div>

            <div className="terms-text">
              By creating an account, you agreeing to our <a href="#" className="policy-link">Privacy Policy</a>, and <a href="#" className="policy-link">Electronics Communication Policy</a>.
            </div>

            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>

          <div className='flex items-center justify-between signup-page-footer'>

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
  )
}

export default StudentSignup