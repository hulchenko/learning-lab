// Example Mongoose model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  // ... other fields
});

module.exports = mongoose.model("User", userSchema);
