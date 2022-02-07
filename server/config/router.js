const express = require("express");
const { ideas } = require("../controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey 👋🏻");
});

router.post("/ideas", ideas.createIdea);
router.get("/ideas", ideas.getIdeas);

module.exports = router;
