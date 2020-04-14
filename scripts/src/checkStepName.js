const checkStepName = (line, name) => {
  const stepArray = line[0].split(" ");
  return stepArray[0] === `//${name}`;
};

module.exports = checkStepName;
