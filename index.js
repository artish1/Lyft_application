const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/test", (req, res) => {
  if (req.body.hasOwnProperty("string_to_cut")) {
    const { string_to_cut } = req.body;

    const return_object = {
      return_string: getEveryThirdLetter(string_to_cut),
    };

    res.status(200).json(return_object);
  }
});

function getEveryThirdLetter(string_to_cut) {
  let new_string = "";
  for (let i = 0; i < string_to_cut.length; i++) {
    if ((i + 1) % 3 !== 0) continue;

    new_string += string_to_cut[i];
  }

  return new_string;
}

app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}`);
});
