const mongoose = require("mongoose");

// Define the User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String], // Array of strings
    default: ["user"]
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number }
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
