// Import necessary packages
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import connectDB from "./src/config/mongoDB";
import router from "./src/routes/TodoRoute";
dotenv.config();

// Create an Express app
const app: Express = express();

// Middleware to handle CORS and JSON data
app.use(cors());
app.use(express.json());

// Call the connectDB function to establish the MongoDB connection
connectDB();

// Respond with a message when accessing the root path
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the root path!");
});

// Use the router for other routes
app.use("/", router);

// Start the server on port 3001
const PORT: number = parseInt(process.env.PORT || "3001"); // Use parseInt to ensure it's a number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
