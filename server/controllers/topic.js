const Topic = require("../models/topic");

exports.getTopics = async function (_, res) {
  try {
    const topics = await Topic.find().sort({ score: -1 });
    return res.status(200).send({ res: topics, error: false });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.createTopics = async function (req, res) {
  try {
    const { topic } = req.body;
    if (!topic)
      return res.status(400).send({ res: "Missing fields!", error: true });
    const newTopic = await Topic.create({ topic });
    return res.status(201).send({ res: newTopic, error: false });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.deleteTopics = async function (req, res) {
  try {
    const { id } = req.params;
    await Topic.deleteOne({ _id: id });
    return res.status(200).send({ res: "Topic deleted", error: false });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.voteUp = async function (req, res) {
  try {
    const { id } = req.params;
    await Topic.findOneAndUpdate({ _id: id }, { $inc: { score: 1 } });
    const newTopics = await Topic.find().sort({ score: -1 });
    return res.status(200).send({ res: newTopics, error: false });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};

exports.voteDown = async function (req, res) {
  try {
    const { id } = req.params;
    await Topic.findOneAndUpdate({ _id: id }, { $inc: { score: -1 } });
    const newTopics = await Topic.find().sort({ score: -1 });
    return res.status(200).send({ res: newTopics, error: false });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ res: "Internal Server Error!", error: true });
  }
};
