const mongoose = require("mongoose");
var contactSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("ContactMessage", contactSchema);
