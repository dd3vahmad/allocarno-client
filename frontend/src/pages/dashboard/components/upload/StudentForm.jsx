import { useState } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !shortName) return alert("All fields are required");

    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, shortName }),
      });
      const data = await res.json();
      alert(data.message || "Student group added successfully");
      // Optionally, reset the fields:
      setName("");
      setShortName("");
    } catch (err) {
      alert("Error adding student group");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Group Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Group Short Name"
        value={shortName}
        onChange={(e) => setShortName(e.target.value)}
        required
      />
      <button type="submit">Add Student Group</button>
    </form>
  );
};

export default StudentForm;
