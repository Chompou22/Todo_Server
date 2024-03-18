"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary packages
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const TodoRoute_1 = __importDefault(require("./routes/TodoRoute"));
// Load environment variables if using dotenv
// import dotenv from "dotenv";
// dotenv.config();
// Create an Express app
const app = (0, express_1.default)();
// Middleware to handle CORS and JSON data
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Connect to MongoDB - replace 'your-database-name' with your actual database name
const mongoURI = "mongodb+srv://chompouang22:s3rq5UMvSylEZKiW@testing.9xnzvgs.mongodb.net/testing";
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("Connected to MongoDB successfully");
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
// Check if the connection to MongoDB is successful
mongoose_1.default.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose_1.default.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
// Respond with a message when accessing the root path
app.get("/", (req, res) => {
    res.send("Welcome to the root path!");
});
// Use the router for other routes
app.use("/", TodoRoute_1.default);
// Start the server on port 3001
const PORT = parseInt(process.env.PORT || "3001"); // Use parseInt to ensure it's a number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
