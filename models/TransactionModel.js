const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  payme_id: { type: String, unique: true },
  time: { type: String },
  amount: { type: Number, required: true },
  account: { type: Number },
  create_time: { type: String, default: Date.now() },
  cancel_time: { type: String },
  perform_time: { type: String },
  transaction_id: { type: Number },
  state: { type: Number, enum: [1, 2, -1, -2] },
  reason: { type: Number, enum: [1, 2, 3, 4, 5, 10] },
  receivers: [{ id: { type: String }, amount: { type: Number } }],
});

module.exports = mongoose.model("transactions", schema);
