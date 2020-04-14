const checkSlashes = (lines) =>
  lines.reduce((flag, line) => flag && line.substring(0, 2) === "//", true);

module.exports = checkSlashes