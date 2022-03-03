import { readFileSync } from 'fs'
import nameThatPokerHand from './nameThatPokerHand'

export default function processFile(filePath: string) {
  const hands = readFileSync(filePath, 'utf-8')
    .split('\n')
    .filter(line => line.length > 0)

  Promise.all(hands.map(hand => nameThatPokerHand(hand)))
    .then(values => {
      values.forEach(pokerHand => console.log(`${pokerHand.hand} => ${pokerHand.name}`))
    })
    .catch(error => console.log(error.message))
}
