const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send('hello world');
});

app.get("/alive", (req, res) => {
  res.send("i am alive");
});

app.get("/tvbox", (req, res) => {
    res.send(require("./tvbox.json"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
