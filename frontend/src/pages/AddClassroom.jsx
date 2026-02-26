import axios from "axios";
import { useState } from "react";

function AddClassroom({ refresh }) {

  const [form, setForm] = useState({
    roomId: "",
    capacity: "",
    floorNo: "",
    nearWashroom: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const submit = async () => {

    await axios.post(
      "https://exam-seat-planner-backend.onrender.com/api/classrooms/add",
      form
    );

    refresh();   // this now works

    alert("Classroom Added");
  };

  return (
    <div className="bg-white shadow-md p-4 rounded mb-6">
       <h2 className="text-xl font-semibold mb-3">Add Classroom</h2>
    <div className="flex gap-2">
      <input className="border p-2 rounded" name="roomId" placeholder="Room ID" onChange={handleChange}/>
      <input className="border p-2 rounded" name="capacity" placeholder="Capacity" onChange={handleChange}/>
      <input className="border p-2 rounded" name="floorNo" placeholder="Floor" onChange={handleChange}/>

      <label>
        Near Washroom
        <input type="checkbox" name="nearWashroom" onChange={handleChange}/>
      </label>

      <button  className="bg-blue-500 text-white px-4 py-2 rounded" onClick={submit}>Add</button>
     </div>
    </div>
  );
}

export default AddClassroom;