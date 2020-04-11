// It needs a step called STEP1 that will call IEFBR14.

const checkFileExists = require('./src/checkFileExists');
const checkJobName = require('./src/checkJobName');
const checkAccount = require('./src/checkAccount');
const checkMsgClass = require('./src/checkMsgClass');
const getLines = require('./src/getLines');

const filename = 'HELLOJOB.jcl'
const jobname = 'HELLOJOB'
const account = '#JCLGIT'
const MSGCLASS = 'X'

const main = async () => {
console.log(` - Checking for ${filename}`)
console.log('    File allocated: ',await checkFileExists(filename))
const lines = getLines(filename)
console.log('    Does it have job name HELLOJOB: ',await checkJobName(lines, jobname))
console.log('    Does it have account #JCLGIT: ',await checkAccount(lines,account))
console.log('    Does it have MSGCLASS X: ',await checkMsgClass(lines,MSGCLASS))
// console.log(`    All lines start with '//' `,await checkBeginSlashes(lines,MSGCLASS))
return true
}

main()
