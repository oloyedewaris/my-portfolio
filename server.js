const express = require("express");
const path = require("path");

const app = express();

app.enable('trust proxy');
// app.use(function (req, res, next) {
//   if (req.secure) {
//     next();
//   } else {
//     res.redirect('https://' + req.headers.host + req.url);
//   }
// });

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
