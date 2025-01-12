const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["food", "transport", "shopping", "bills", "other",], // Optional, restrict categories
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  userId: { // Relates expense to a user (multi-user apps)
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Expense", expenseSchema);
