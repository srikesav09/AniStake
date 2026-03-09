const express = require("express");
const path = require("path");

const app = express();
const PORT = 5050;

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.send("<h1>No access</h1>");
});

app.get('/Anistack', (req, res) => {
  res.send("no access");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});