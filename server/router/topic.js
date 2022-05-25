const { Router } = require("express");
const topicController = require("../controllers/topic");

const router = Router();

router.get("/",  topicController.getTopics);
router.post("/",  topicController.createTopics);
router.delete("/:id", topicController.deleteTopics);
router.put("/:id/up", topicController.voteUp);
router.put("/:id/down", topicController.voteDown);


exports.topicRouter = router;
