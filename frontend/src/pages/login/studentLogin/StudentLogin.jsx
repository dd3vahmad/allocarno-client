import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./studentLogin.css"
import { PiStudentLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import dashboardPreview from "../../../assets/images/dashboard-preview.png"

const StudentLogin = () => {
  const [matricNumber, setMatricNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { matricNumber, password });

  };
  return (
    <div className="student-login-container student">
      <div className="login-form-section">
        <div className="login-form-content">
          <h1 className="login-title">Student's Login</h1>
          <p className="login-subtitle">The future of academic scheduling starts now</p>

          <form onSubmit={handleSubmit}>

            <div className="flex items-center gap-1 form-label">
              <div className="separator"></div>
              <p className="input-text">ENTER YOUR MATRIC NUMBER</p>
              <div className="separator"></div>
            </div>

            <div className="input-container">
              <span className="input-icon">
                <PiStudentLight />
              </span>
              <input
                type="text"
                placeholder="UTME or Matric Number"
                value={matricNumber}
                onChange={(e) => setMatricNumber(e.target.value)}
                required
              />
            </div>

            <div className="input-container password">
              <span className="input-icon">
                <CiLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>

          <div className='flex items-center justify-between login-page-footer'>

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

export default StudentLogin