const mongoose = require('./index');

const TopicSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Topic = mongoose.model('topic', TopicSchema);

module.exports = Topic;
