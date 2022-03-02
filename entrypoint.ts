#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

type Args = {
  sourceFile: string
}

const vargs = yargs(hideBin(process.argv))
  .usage('Usage: poker [path]')
  .command('$0 sourceFile', 'Command to run the script')
  .parse() as unknown as Args

console.log(vargs.sourceFile)
