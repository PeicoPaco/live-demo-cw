const { Router } =  require("express");
const { topicRouter } = require("./topic");

const rootRouter = Router();

rootRouter.use("/api/topics", topicRouter);

exports.router = rootRouter;