import { useState } from "react";

const HallForm = () => {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [capacity, setCapacity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !shortName || capacity <= 0) {
      return alert("Please fill in all the required fields correctly");
    }

    try {
      const res = await fetch("/api/halls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, shortName, capacity }),
      });
      const data = await res.json();
      alert(data.message || "Hall added successfully");
      // Optionally, clear the form:
      setName("");
      setShortName("");
      setCapacity(0);
    } catch (err) {
      alert("Error adding hall");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <input
        type="text"
        placeholder="Hall Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Hall Short Name"
        value={shortName}
        onChange={(e) => setShortName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Capacity"
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
        min={1}
        required
      />
      <button type="submit">Add Hall</button>
    </form>
  );
};

export default HallForm;
