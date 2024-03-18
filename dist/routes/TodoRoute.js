"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TodoController_js_1 = require("../controllers/TodoController.js");
const router = express_1.default.Router();
router.post("/add", TodoController_js_1.addTodo);
router.delete("/delete/:id", TodoController_js_1.deleteTodo);
router.put("/update/:id", TodoController_js_1.updateTodo);
router.get("/todos", TodoController_js_1.getAllTodos);
exports.default = router;
