import { Request, Response } from "express";
import TodoModel from "../models/TodoModel.js";

// Add a single task to a database
export const addTodo = async (req: Request, res: Response) => {
  try {
    const { task, completed, isEditing } = req.body;

    const newTodo = new TodoModel({
      task,
      completed,
      isEditing,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all tasks from a database
export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a single from database by using id
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTodo = await TodoModel.findByIdAndDelete(id);
    res.status(200).json(deletedTodo);
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a single task from database by using id and old task properties

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { task, completed, isEditing } = req.body;

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      id,
      { task, completed, isEditing },
      { new: true }
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
