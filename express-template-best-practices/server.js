const express = require("express");
const morgan = require("morgan"); // For logging
const helmet = require("helmet"); // For security
const userRoutes = require("./routes/users"); // User routes
const errorHandler = require("./middleware/error-handler"); // Error handling middleware

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev")); // Concise dev logging
app.use(helmet()); // Sets various HTTP headers for security
app.use(express.json()); // Parses JSON request bodies

// Routes
app.use("/api/users", userRoutes); // makes these routes prefixed with /api/users

// Error Handling (Important! Place after routes)
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
