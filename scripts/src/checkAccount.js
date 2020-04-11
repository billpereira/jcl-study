const checkAccount = (lines,account) => {
  const lineOneSplitted = lines[0].split(' ')
  const parms = lineOneSplitted[2].split(',')
  return account===parms[0].replace('(','').replace(')','')
}

module.exports = checkAccount