import { useState } from "react";
import "./CourseForm.css";

const CourseForm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !code) return alert("All fields are required");

    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, code }),
      });
      const data = await res.json();
      alert(data.message || "Course added successfully");
    } catch (err) {
      alert("Error adding course");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Course Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="upload-button">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
