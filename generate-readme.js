const fs = require('fs');
const path = require('path');

const TITLE = [
  '| # | Title | Solution | Tests | Difficulty |',
  '|:---:|:---:|:---:|:---:|:---:|'
];
const REPO_BASE_URL =
  'https://github.com/zhenyi2697/leetcode-js/blob/master/leetcode';
const solutionPath = path.join(__dirname, 'leetcode');
const SOURCE_PREFIX = '// Source:';
const DIFFICULTY_PREFIX = '// Difficulty:';
const SOLVED_PROBLMES_TITLE = '## Solved problems';
const LICENSE_TITLE = '## LICENSE';
const tableLines = [];

// 1. Build tableLines by reading leetcode solutions
console.log('Parse directories to generate table content...');
const questions = fs.readdirSync(solutionPath);
questions.forEach(qDir => {
  const qSplit = qDir.split('-');
  const number = parseInt(qSplit.shift(), 10);
  const title = buildTitle(qSplit);
  const { jsFileName, testFileName } = getSolutionFileNames(qDir);
  const { qLink, solutionLink, difficulty } = getSolutionInfo(qDir, jsFileName);
  const testLink = getTestInfo(qDir, testFileName);
  const line = `| ${number} | [${title}](${qLink}) | [JavaScript](${solutionLink}) | [Jest](${testLink}) | ${difficulty} |`;
  tableLines.push(line);
});

// 2. Generate README with solutions
console.log('Write lines into README.md...');
var readmePath = path.join(__dirname, 'README.md');
const contentLines = buildReadmeContent(readmePath, tableLines);
fs.writeFile(readmePath, contentLines.join('\n'), err => {
  if (err) {
    return console.error(err);
  }
  console.log('Done !');
});

function buildReadmeContent(readmePath, tableLines) {
  const readmeLines = fs.readFileSync(readmePath, 'utf-8').split('\n');
  let startIndex = 0;
  let endIndex = 0;
  for (const [index, line] of readmeLines.entries()) {
    if (line.startsWith(SOLVED_PROBLMES_TITLE)) {
      startIndex = index + 1;
    } else if (line.startsWith(LICENSE_TITLE)) {
      endIndex = index - 1;
    }
  }

  let readmeContent = [];
  readmeContent = readmeContent
    .concat(readmeLines.slice(0, startIndex))
    .concat(TITLE)
    .concat(tableLines)
    .concat(readmeLines.slice(endIndex, readmeLines.length));
  return readmeContent;
}

function getSolutionFileNames(qDir) {
  const fileNames = {};
  const qPath = path.join(solutionPath, qDir);
  const files = fs.readdirSync(qPath);
  files.forEach(f => {
    if (f.endsWith('.test.js')) {
      fileNames['testFileName'] = f;
    } else {
      fileNames['jsFileName'] = f;
    }
  });
  return fileNames;
}

function getSolutionInfo(qDir, jsFileName) {
  const solutionInfo = {
    solutionLink: `${REPO_BASE_URL}/${qDir}/${jsFileName}`
  };
  const fPath = path.join(solutionPath, qDir, jsFileName);
  const lines = fs.readFileSync(fPath, 'utf-8').split('\n');
  lines.forEach(line => {
    if (line.startsWith(SOURCE_PREFIX)) {
      solutionInfo['qLink'] = line.split(SOURCE_PREFIX)[1].trim();
    } else if (line.startsWith(DIFFICULTY_PREFIX)) {
      solutionInfo['difficulty'] = line.split(DIFFICULTY_PREFIX)[1].trim();
    }
  });
  return solutionInfo;
}

function getTestInfo(qDir, testFileName) {
  return `${REPO_BASE_URL}/${qDir}/${testFileName}`;
}

function buildTitle(splits) {
  return splits
    .map(s => s.toLowerCase())
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}
