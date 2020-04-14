const checkFileExists = require('./src/checkFileExists');
const checkJobName = require('./src/checkJobName');
const checkAccount = require('./src/checkAccount');
const checkMsgClass = require('./src/checkMsgClass');
const checkStepName = require('./src/checkStepName');
const checkSlashes = require('./src/checkSlashes');
const checkStepPgm = require('./src/checkStepPgm');
const getLines = require('./src/getLines');

const filename = 'HELLOJOB.jcl'
const jobname = 'HELLOJOB'
const account = '#JCLGIT'
const MSGCLASS = 'X'
const stepname = 'STEP1'
const program = 'IEFBR14'
const lines = getLines(filename)
const stepLine = lines.filter(l => l.indexOf('EXEC')>-1)

const main = async () => {

const resultFileCheck = await checkFileExists(filename)
const resultJobCheck = await checkJobName(lines, jobname)

console.log(` - Checking for CHALLENGE 1 - ${filename}`)
console.log('      File allocated: ',await checkFileExists(filename))
console.log('      Does it have job name HELLOJOB: ',await checkJobName(lines, jobname))
console.log('      Does it have account #JCLGIT: ',await checkAccount(lines,account))
console.log('      Does it have MSGCLASS X: ',await checkMsgClass(lines,MSGCLASS))
console.log('      Does it have step called STEP1: ',await checkStepName(stepLine,stepname))
console.log('      Does it have IEFBR14: ',await checkStepPgm(stepLine[0],program))
console.log(`      All lines start with '//' `,await checkSlashes(lines))
return true
}

main()
