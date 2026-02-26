import { useEffect, useState } from "react";
import axios from "axios";
import AddClassroom from "./pages/AddClassroom";
import ClassroomList from "./pages/ClassroomList";
import AllocateSeats from "./pages/AllocateSeats";

function App() {

  const [rooms,setRooms] = useState([]);

  const fetchRooms = async () => {
    const res = await axios.get("http://localhost:5000/api/classrooms/all");
    setRooms(res.data);
  };

  useEffect(()=>{
    fetchRooms();
  },[]);

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">College Exam Seat Planner</h1>

      <AddClassroom refresh={fetchRooms} />

      <ClassroomList rooms={rooms} />

      <AllocateSeats />

    </div>
  );
}

export default App;