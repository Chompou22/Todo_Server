"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.getAllTodos = exports.addTodo = void 0;
const TodoModel_js_1 = __importDefault(require("../models/TodoModel.js"));
// Add a single task to a database
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, completed, isEditing } = req.body;
        const newTodo = new TodoModel_js_1.default({
            task,
            completed,
            isEditing,
        });
        const savedTodo = yield newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch (error) {
        console.error("Error adding todo:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.addTodo = addTodo;
// Get all tasks from a database
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield TodoModel_js_1.default.find();
        res.status(200).json(todos);
    }
    catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllTodos = getAllTodos;
// Delete a single from database by using id
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedTodo = yield TodoModel_js_1.default.findByIdAndDelete(id);
        res.status(200).json(deletedTodo);
    }
    catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.deleteTodo = deleteTodo;
// Update a single task from database by using id and old task properties
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { task, completed, isEditing } = req.body;
        const updatedTodo = yield TodoModel_js_1.default.findByIdAndUpdate(id, { task, completed, isEditing }, { new: true });
        res.status(200).json(updatedTodo);
    }
    catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.updateTodo = updateTodo;
