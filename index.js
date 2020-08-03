const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/test", (req, res) => {
  if (req.hasOwnProperty("string_to_cut")) {
  }
});

app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}`);
});
