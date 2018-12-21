#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const isLink = str => str.match(/^https?:\/\//);

const formatLabel = label => chalk.white.bold(label.padStart(10));
const formatValue = str => (isLink(str) ? chalk.cyan(str) : chalk.white(str));
const formatLine = ([label, value]) => `${formatLabel(label)}:  ${formatValue(value)}`;

const heading = `${chalk.white('Zack Harley')} / ${chalk.cyan('zackharley')}`;
const body = [
  ['Work', 'Software Engineer @ Ten Thousand Coffees'],
  ['Twitter', 'https://twitter.com/Zackery_Harley'],
  ['GitHub', 'https://github.com/zackharley'],
  ['LinkedIn', 'https://linkedin.com/in/zackharley'],
  ['Website', 'https://zackharley.me'],
]
  .map(formatLine)
  .join('\n');
const npx = `Card:  ${chalk.white('npx zackharley')}`;
const output = heading + '\n\n' + body + '\n\n' + npx;

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

console.log(chalk.green(boxen(output, boxenOptions)));
