const express = require("express");
const app = express();
const cors = require("cors");
require("./connection/conn");
const notesRoute = require("./routes/notes");
const path = require("path");
app.use(express.json());
app.use(cors());

app.use("/api/v1", notesRoute);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(1010, () => {
  console.log("Server Started");
});
