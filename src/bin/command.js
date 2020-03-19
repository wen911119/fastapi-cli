#!/usr/bin/env node
const program = require('commander')
const packageInfo = require('../../package.json')
const options = require('minimist')(process.argv.slice(2))

program
  .version(packageInfo.version, '-v, --version')
  .allowUnknownOption()
  .description('fastapi cli 工具')
  .usage('<command> [options]')


// create new project command
program
  .command('create')
  .description('初始化一个新项目')
  .action(directory => {
    require('../libs/create')(directory)
  })

program.parse(process.argv)

if (!options._.length) {
  program.help()
}
