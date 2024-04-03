const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  res.json({ file });

  // res.send(file);
  // res.send("upload thanh cong");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`dang chay tren cong ${port}`);
});
