const express = require("express");
const taskControllers = require("../controllers/task");

const router = express.Router();

router.post("/", taskControllers.createTask);
router.get("/", taskControllers.getAllTasks);
router.get("/:id", taskControllers.getTask);
router.delete("/:id", taskControllers.deleteTask);
router.put("/:id", taskControllers.updateTask);

exports.routes = router;
