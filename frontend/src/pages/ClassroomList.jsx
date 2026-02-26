import { useEffect, useState } from "react";
import axios from "axios";

function ClassroomList({ rooms }) {
  return (
    <div>
      <h2>All Classrooms</h2>

      {rooms.length === 0 ? (
        <p>No classrooms added</p>
      ) : (
        rooms.map((room) => (
          <div key={room._id}>
            {room.roomId} | Capacity: {room.capacity} | Floor: {room.floorNo}
          </div>
        ))
      )}
    </div>
  );
}

export default ClassroomList;