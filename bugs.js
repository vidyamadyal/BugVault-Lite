const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  severity: String,
});

const Bug = mongoose.model('Bug', bugSchema);

// POST: Submit a bug
router.post('/', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    console.error("Error saving bug:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all bugs
router.get('/', async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

module.exports = router;