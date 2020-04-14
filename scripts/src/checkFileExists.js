const fs = require("fs");

const checkFileExists = (fileName) => {
  try {
    fs.statSync(`./${fileName}`);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") {
      return false;
    }
  }
};

module.exports = checkFileExists;
