const checkMsgClass = (lines, msgclass) => {

  const lineOneSplitted = lines[0].split(",");

  const msgParm = lineOneSplitted.filter(
    (element) => element.indexOf("MSGCLASS") > -1
  );

  const msgParmValue = msgParm[0].split("=");

  return msgParmValue[1] === msgclass;
};

module.exports = checkMsgClass;
