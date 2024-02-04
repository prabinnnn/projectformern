const router = require("express").Router();
const blogcontroller = require("./blog.controller");

router.get("/", async (req, res, next) => {
  try {
    result = await blogcontroller.getById(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    result = await blogcontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    result = await blogcontroller.updateById(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    result = await blogcontroller.updateById(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    result = await blogcontroller.updateById(id, data);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
