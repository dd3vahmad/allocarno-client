import { useState } from "react";
import "./CourseForm.css";
import { slugify } from "../../../../lib/helpers";
import axios from "../../../../lib/axios";

const CourseForm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !code) return alert("All fields are required");

    try {
      const res = await axios.post("/v1/courses", { name, code });
      const { failed, message } = res.data;

      if (failed) {
        alert(message || "Error adding course.");
        return;
      }
      alert(message || "Course added successfully");

      setCode("");
      setName("");
    } catch (err) {
      alert(err.message || "Error adding course");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Course Code"
        value={code}
        onChange={(e) => setCode(slugify(e.target.value))}
      />
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value.trim())}
      />
      <button type="submit" className="upload-button">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
