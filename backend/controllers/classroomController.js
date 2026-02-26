const Classroom = require("../models/Classroom");

exports.addClassroom = async (req,res)=>{
  try{
    const room = new Classroom(req.body);
    await room.save();
    res.json(room);
  }catch(err){
    res.status(500).json(err);
  }
};

exports.getClassrooms = async (req,res)=>{
  const rooms = await Classroom.find();
  res.json(rooms);
};

exports.allocateSeats = async (req,res)=>{

  const { totalStudents } = req.body;

  let rooms = await Classroom.find();

  rooms.sort((a,b)=>{
    if(a.floorNo === b.floorNo){
      return b.capacity - a.capacity;
    }
    return a.floorNo - b.floorNo;
  });

  let remaining = totalStudents;
  let allocation = [];

  for(let room of rooms){

    if(remaining <= 0) break;

    let used = Math.min(room.capacity, remaining);

    allocation.push({
      roomId: room.roomId,
      floorNo: room.floorNo,
      studentsAllocated: used
    });

    remaining -= used;
  }

  if(remaining > 0){
    return res.json({
      message:"Not enough seats available"
    });
  }

  res.json(allocation);
};