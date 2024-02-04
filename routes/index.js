const router = require("express").Router();
const blogrouter = require("../module/blog/blog.route");

router.use("/api/v1", blogrouter);

module.exports = router;
