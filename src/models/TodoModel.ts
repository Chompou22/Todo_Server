import mongoose, { Document } from "mongoose";

// Define the schema for the Todo model
interface Todo extends Document {
  task: string;
  completed: boolean;
  isEditing: boolean;
}

const todoSchema = new mongoose.Schema<Todo>({
  task: {
    type: String,
    default: "Sample1",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

// Create the Todo model using the schema
const TodoModel = mongoose.model<Todo>("Todo", todoSchema);

export default TodoModel;
