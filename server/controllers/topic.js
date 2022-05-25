const Topic = require("../models/topic");

exports.getTopics = async function (req, res) {
  try {
    const topics = await Topic.find().sort({score: -1});
    return res.status(200).send({ res: topics, error: false });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.createTopics = async function (req, res) {
  try {
    const { topic } = req.body;
    console.log(topic)
    if (!topic) {
      return res.status(400).send({ res: "Missing fields!", error: true });
    }
    const newTopic = await Topic.create({ topic });
    return res.status(201).send({ res: newTopic, error: false });
  } catch (e) {
    console.log(e, "error");
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.deleteTopics = async function (req, res) {
  try {
    const { id } = req.params;
    await Topic.deleteOne({ _id: id });
    return res.status(200).send({
      res: `Topic with id: ${id} deleted successfully!`,
      error: false,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.voteUp = async function (req, res) {
  try {
    const { id } = req.params;
    const updatedTopic = await Topic.findOneAndUpdate(
      { _id: id },
      { $inc: { score: 1 } },
      { new: true }
    );
    return res.status(200).send({
      res: updatedTopic,
      error: false,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.voteDown = async function (req, res) {
  try {
    const { id } = req.params;
    const updatedTopic = await Topic.findOneAndUpdate(
      { _id: id },
      { $inc: { score: -1 } },
      { new: true }
    );
    return res.status(200).send({
      res: updatedTopic,
      error: false,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};
