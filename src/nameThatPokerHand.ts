import { PokerHand } from './@types/pokerHand'

export default async function nameThatPokerHand(hand: string): Promise<PokerHand> {
  return new Promise((resolve, reject) => {
    const cards = hand
      .split(' ')
      .map(card => card.trim())
      .filter(card => card.length > 0)

    if (cards.length !== 5) {
      reject(new Error(`${cards.length} cards were supplied, a poker hand must have exactly 5 cards`))
    }

    resolve({ hand, name: 'Example hand' })
  })
}
