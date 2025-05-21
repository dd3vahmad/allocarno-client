"use client";

import { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CourseForm from "../../components/upload/CourseForm";
import HallForm from "../../components/upload/HallForm";
import LecturerForm from "../../components/upload/LecturerForm";
import StudentForm from "../../components/upload/StudentForm";
import "./fileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [entityType, setEntityType] = useState("course");
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.size <= 10 * 1024 * 1024) {
      setFile(droppedFile);
    } else {
      alert("File size exceeds 10MB limit");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("File size exceeds 10MB limit");
    }
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file");
    console.log(`Uploading ${entityType} file:`, file);
    alert(`"${file.name}" uploaded for ${entityType}`);
  };

  const renderForm = () => {
    switch (entityType) {
      case "course":
        return <CourseForm />;
      case "hall":
        return <HallForm />;
      case "lecturer":
        return <LecturerForm />;
      case "student":
        return <StudentForm />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-main">
        <Sidebar currentPage="upload" />
        <div className="content-area">
          <div className="file-upload-container">
            <h1 className="text-center upload-title">Upload or Add Entities</h1>
            <select
              className="entity-selector"
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
            >
              <option value="course">Courses</option>
              <option value="hall">Halls</option>
              <option value="lecturer">Lecturers</option>
              <option value="student">Students</option>
            </select>

            <p className="text-center upload-description">
              Upload a <span className="format">.PDF</span>,{" "}
              <span className="format">.CSV</span>, or{" "}
              <span className="format">.DOCX</span> file (Max 10MB) or add
              manually below
            </p>

            <div
              className={`upload-area ${isDragging ? "dragging" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.csv,.docx"
                style={{ display: "none" }}
              />

              <div className="upload-content">
                <div className="upload-icon">
                  <FiUploadCloud size={40} />
                </div>
                <p className="upload-text">
                  {file ? file.name : "Drag and drop or click to choose files"}
                </p>
                <p className="file-size-info">
                  <span className="info-icon">
                    <AiOutlineExclamationCircle />
                  </span>{" "}
                  Max file size 10MB
                </p>
              </div>
            </div>

            <button
              className="upload-button"
              onClick={handleUpload}
              disabled={!file}
            >
              Upload {entityType}
            </button>

            <div className="manual-entry-form">
              <h2 className="form-title">Add a {entityType} manually</h2>
              {renderForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
