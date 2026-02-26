const express = require("express");
const router = express.Router();

const {
  addClassroom,
  getClassrooms,
  allocateSeats
} = require("../controllers/classroomController");

router.post("/add", addClassroom);

router.get("/all", getClassrooms);

router.post("/allocate", allocateSeats);

module.exports = router;