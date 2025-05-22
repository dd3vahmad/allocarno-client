import { useState } from "react";
import axios from "../../../../lib/axios";
import "./HallForm.css";
import TimeSlot from "./TimeSlot";
import { BsInfoCircle, BsPlus } from "react-icons/bs";

const HallForm = () => {
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [timeSlots, setTimeSlots] = useState([
    { day: "Sunday", startTime: "", endTime: "" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !shortName || capacity <= 0) {
      return alert("Please fill in all the required fields correctly");
    }

    try {
      const res = await axios.post("/v1/halls", { name, shortName, capacity });
      const { message, failed } = await res.data;

      if (failed) {
        alert(message || "Error adding hall.");
        return;
      }

      alert(message || "Hall added successfully");

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
        base-button
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

      <div className="time-slots-header">
        <h2 className="time-slots-title">Time Slots</h2>
        <p onClick={() => setShowInfo(!showInfo)} className="info-toggle">
          What's this?
        </p>
      </div>
      {showInfo && (
        <div className="time-slots-info">
          <BsInfoCircle />{" "}
          <p>
            Time ranges when the hall will be active for use, you can add as
            many as possible.
          </p>
        </div>
      )}
      <div className="time-slots">
        {timeSlots.map((slot, i) => (
          <TimeSlot key={i} slot={slot} />
        ))}
      </div>

      <div className="base-button">
        <button type="submit" className="upload-button">
          Add Hall
        </button>
        <button
          onClick={() =>
            setTimeSlots((prev) => [
              ...prev,
              { day: "Sunday", startTime: "", endTIme: "" },
            ])
          }
          className="add-slot-button"
        >
          <BsPlus size={24} />
        </button>
      </div>
    </form>
  );
};

export default HallForm;
