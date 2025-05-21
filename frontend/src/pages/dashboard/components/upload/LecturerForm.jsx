import { useState } from "react";

const LecturerForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [rank, setRank] = useState("lecturer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return alert("Name is required");

    try {
      const res = await fetch("/api/lecturers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, gender, rank }),
      });
      const data = await res.json();
      alert(data.message || "Lecturer added successfully");
      // Optionally, clear the form:
      setName("");
      setGender("male");
      setRank("lecturer");
    } catch (err) {
      alert("Error adding lecturer");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Lecturer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select value={rank} onChange={(e) => setRank(e.target.value)}>
        <option value="lecturer">Lecturer</option>
        <option value="doctor">Doctor</option>
        <option value="professor">Professor</option>
      </select>
      <button type="submit">Add Lecturer</button>
    </form>
  );
};

export default LecturerForm;
