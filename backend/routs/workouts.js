const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// //DELET a new workout
// router.delete('/:id', (req, res) => {
//     res.json({mssg: 'DELET a  workout'})
// })

//DELET a new workout
router.delete("/:id", deleteWorkout);

//UPDATE a new workout
router.patch("/:id", updateWorkout);

module.exports = router;

// const express = require('express');
// const {
//     createWorkout, // Renamed for consistency
//     getWorkouts,   // Renamed for consistency
//     getWorkout,    // Renamed for consistency
//     deleteWorkout, // Placeholder for future implementation
//     updateWorkout  // Placeholder for future implementation
// } = require('../controllers/workoutControllers');
// const router = express.Router();

// // GET all workouts
// router.get('/', getWorkouts); // Corrected function name

// // GET a single workout
// router.get('/:id', getWorkout); // Corrected function name

// // POST a new workout
// router.post('/', createWorkout); // Corrected function name

// // DELETE a workout
// router.delete('/:id', deleteWorkout); // Placeholder function, assuming you'll implement it

// // UPDATE a workout
// router.patch('/:id', updateWorkout); // Placeholder function, assuming you'll implement it

// module.exports = router;
