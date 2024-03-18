import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/TodoController.js";

const router = express.Router();

router.post("/add", addTodo);
router.delete("/delete/:id", deleteTodo);
router.put("/update/:id", updateTodo);
router.get("/todos", getAllTodos);

export default router;
