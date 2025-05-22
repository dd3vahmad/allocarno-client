// "use client";

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
  const [dataMap, setDataMap] = useState({
    course: [],
    hall: [],
    lecturer: [],
    "student group": [],
  });
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
    alert(`"${file.name}" uploaded for ${entityType}`);
  };

  const handleAddEntity = (newEntity) => {
    setDataMap((prev) => ({
      ...prev,
      [entityType]: [...prev[entityType], newEntity],
    }));
  };

  const renderForm = () => {
    const commonProps = { onAdd: handleAddEntity };
    switch (entityType) {
      case "course":
        return <CourseForm {...commonProps} />;
      case "hall":
        return <HallForm {...commonProps} />;
      case "lecturer":
        return <LecturerForm {...commonProps} />;
      case "student group":
        return <StudentForm {...commonProps} />;
      default:
        return null;
    }
  };

  const renderTable = () => {
    const data = dataMap[entityType];
    if (!data || data.length === 0) {
      return <p className="no-entries">No {entityType}s added yet.</p>;
    }

    const columns = Object.keys(data[0]);

    return (
      <div className="entity-table-wrapper">
        <table className="entity-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col}>{entry[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-main">
        <Sidebar currentPage="upload" />
        <div className="content-area">
          <div className="file-upload-wrapper">
            <div className="file-upload-container">
              <h1 className="upload-title">Upload or Add Entities</h1>
              <select
                className="entity-selector"
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
              >
                <option value="course">Courses</option>
                <option value="hall">Halls</option>
                <option value="lecturer">Lecturers</option>
                <option value="student group">Student Groups</option>
              </select>

              <p className="text-center upload-description">
                Upload an <span className="format">.XLSX</span>,{" "}
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
                  accept=".xlsx,.csv,.docx"
                  style={{ display: "none" }}
                />

                <div className="upload-content">
                  <div className="upload-icon">
                    <FiUploadCloud size={40} />
                  </div>
                  <p className="upload-text">
                    {file
                      ? file.name
                      : "Drag and drop or click to choose files"}
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

            <div className="entity-container">
              <h2 className="entity-header">{entityType}s</h2>
              <div className="entity-content">{renderTable()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
