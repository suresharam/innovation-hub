const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey! 👋🏻 ");
});

app.listen(4000, () => {
  console.info("Server is running at http://localhost:4000");
});
