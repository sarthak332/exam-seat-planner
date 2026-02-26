import { useState } from "react";
import axios from "axios";

function AllocateSeats() {
  const [students, setStudents] = useState("");
  const [result, setResult] = useState([]);

  const allocate = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/classrooms/allocate",
      { totalStudents: Number(students) }
    );

    setResult(res.data);
  };

  return (
    <div>
      <h2>Allocate Seats</h2>

      <input
        placeholder="Total Students"
        onChange={(e) => setStudents(e.target.value)}
      />

      <button onClick={allocate}>Allocate</button>

      <h3>Result</h3>

      {Array.isArray(result) &&
        result.map((r, i) => (
          <div key={i}>
            Room {r.roomId} → {r.studentsAllocated} students
          </div>
        ))}

      {result.message && <p>{result.message}</p>}
    </div>
  );
}

export default AllocateSeats;