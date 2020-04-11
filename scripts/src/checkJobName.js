const checkJobName = (lines, jobName) =>
  lines[0].substring(0, 10) === `//${jobName}`;

module.exports = checkJobName;
