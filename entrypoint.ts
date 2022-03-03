#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { readFileSync } from 'fs'
import nameThatPokerHand from './src/nameThatPokerHand'

type Args = {
  sourceFile: string
}

const vargs = yargs(hideBin(process.argv))
  .usage('Usage: poker [path]')
  .command('$0 sourceFile', 'Command to run the script')
  .parse() as unknown as Args

const hands = readFileSync(vargs.sourceFile, 'utf-8')
  .split('\n')
  .filter(line => line.length > 0)

Promise.all(hands.map(hand => nameThatPokerHand(hand)))
  .then(values => {
    values.forEach(pokerHand => console.log(`${pokerHand.hand} => ${pokerHand.name}`))
  })
  .catch(error => console.error(error.message))
