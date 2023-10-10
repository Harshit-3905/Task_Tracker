const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");
const User = require("../models/userModel");

const addTask = asyncHandler(async (req, res) => {
  const { title, description, email } = req.body;
  const completed = false;
  if (!title || !email) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const user = await User.findOne({ email });
  const authorId = user._id;
  const task = await Task.create({
    title,
    description,
    authorId,
    completed,
  });

  if (task) {
    res.status(201).json({
      _id: task._id,
      title: task.title,
      authorId: task.authorId,
    });
  } else {
    res.status(400);
    throw new Error("Unable to Create User");
  }
});

module.exports = { addTask };
