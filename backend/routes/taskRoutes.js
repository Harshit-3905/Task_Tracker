const express = require("express");
const { addTask } = require("../controllers/taskController");

const router = express.Router();
router.route("/").post(addTask);

module.exports = router;
