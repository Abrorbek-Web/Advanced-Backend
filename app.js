require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const cookieparser = require("cookie-parser");
const cors = require("cors");

const app = express();

// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//   })
// );
// app.use(express.json());
// app.use(fileupload({}));
// app.use(cookieparser({}));
// app.use(express.static("static"));

app.use("api/auth", require("./routes/auth.route"));
const PORT = process.env.PORT || "8080";

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
