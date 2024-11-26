require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const { body } = req;
  console.log(body);

  res.json({ name: "Abrorbek", surname: "Mayunusov" });
});

const PORT = process.env.PORT || "8080";

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
