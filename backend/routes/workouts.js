const express = require("express");
const Wokrout = require("../models/workoutModel");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all workouts!" });
});

//GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single workouts!" });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const wokrout = await Wokrout.create({ title, load, reps });
    res.status(200).json(wokrout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a workout!" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout!" });
});

module.exports = router;
