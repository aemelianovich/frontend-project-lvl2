#!/usr/bin/env node

import program from 'commander';
import genDiff from '../src/index.js';

program
  .version('0.1.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const formattedDiff = genDiff(filepath1, filepath2, program.format);
    console.log(formattedDiff);
  })
  .parse(process.argv);
