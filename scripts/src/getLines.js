const fs = require("fs");

const getLines = (fileName) => {
  
  let data = "";
  try {
    data = fs.readFileSync(`./${fileName}`, "utf8").toUpperCase();
  } catch (err) {
    data = err;
  }

  return lines = data.toString().toUpperCase().split("\n");
};

module.exports = getLines;