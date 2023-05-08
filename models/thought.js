const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
