const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get('/db', (req, res) => {
  fetch(`https://aiagents.onrender.com/litedb?id=${req.query.id}`)
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'API error! Please try again later' });
    });
})

app.post("/db", (req, res) => {
  fetch(`https://aiagents.onrender.com/litedb`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: req.body,
  })
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.listen(3000, () => console.log("Running on port 3000"));

module.exports = app;