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

app.post("/db", async (req, res) => {
  const params = new URLSearchParams(req.body);

  try {
    const response = await fetch("https://aiagents.onrender.com/litedb", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const result = await response.json();
    res.send(result);
  } catch (error) {
    res.status(500).send("Error forwarding request: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.listen(3000, () => console.log("Running on port 3000"));

module.exports = app;