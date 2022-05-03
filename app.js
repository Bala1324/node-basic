const express = require("express");
const app = express();

app.get("/barath", (req, res) => {
  console.log(req.query);
  res.json({ name: req.query.name });
});

app.listen(8000, () => {
  console.log("server listening!");
});
