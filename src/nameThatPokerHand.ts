type PokerHand = {
  hand: string
  name: string
}

const ranks = 'A23456789TJQKA'

const sortHandByWeight = (cards: string[], highAce = false) => {
  return cards.sort((a, b) => {
    const aWeight = a.substring(0, 1)
    const bWeight = b.substring(0, 1)
    if (highAce) {
      return ranks.lastIndexOf(aWeight) - ranks.lastIndexOf(bWeight)
    }
    return ranks.indexOf(aWeight) - ranks.indexOf(bWeight)
  })
}

const isFlush = (cards: string[]): boolean => {
  return [...new Set(cards.map(card => card.substring(1)))].length === 1
}

const isStraight = (cards: string[]): boolean => {
  const sortedWeightsUsingLowAce = sortHandByWeight(cards)
    .map(card => card.substring(0, 1))
    .join('')

  const sortedWeightsUsingHighAce = sortHandByWeight(cards, true)
    .map(card => card.substring(0, 1))
    .join('')

  return ranks.includes(sortedWeightsUsingLowAce) || ranks.includes(sortedWeightsUsingHighAce)
}

const countWeights = (cards: string[]) => {
  const counts = new Map<string, number>()

  cards
    .map(card => card.substring(0, 1))
    .forEach(weight => (counts.has(weight) ? counts.set(weight, counts.get(weight) + 1) : counts.set(weight, 1)))

  return counts
}

export default async function nameThatPokerHand(hand: string): Promise<PokerHand> {
  return new Promise((resolve, reject) => {
    const cards = hand
      .split(' ')
      .map(card => card.trim())
      .filter(card => card.length === 2)

    if (cards.length !== 5) {
      return reject(new Error(`${cards.length} cards were supplied, a poker hand must have exactly 5 cards`))
    }

    const handIsFlush = isFlush(cards)
    const handIsStraight = isStraight(cards)

    if (handIsFlush && handIsStraight) {
      const isRoyalFlush = sortHandByWeight(cards, true)
        .map(card => card.substring(0, 1))
        .join('')
        .includes('TJQKA')
      if (isRoyalFlush) {
        return resolve({ hand, name: 'Royal flush' })
      }
      return resolve({ hand, name: 'Straight flush' })
    }

    const weightCount = countWeights(cards)
    const weights = Array.from(weightCount.keys()) // All unique weights

    if (weights.length === 2) {
      if (Array.from(weightCount.values()).includes(4)) {
        return resolve({ hand, name: 'Four of a kind' })
      }
      return resolve({ hand, name: 'Full house' })
    }

    if (handIsFlush) {
      return resolve({ hand, name: 'Flush' })
    }
    if (handIsStraight) {
      return resolve({ hand, name: 'Straight' })
    }

    if (weights.length === 3) {
      if (Array.from(weightCount.values()).includes(3)) {
        return resolve({ hand, name: 'Three of a kind' })
      }
      return resolve({ hand, name: 'Two pair' })
    }

    if (weights.length === 4) {
      return resolve({ hand, name: 'One pair' })
    }

    if (weights.length === 5) {
      return resolve({ hand, name: 'High card' })
    }

    return resolve({ hand, name: 'Unknown' })
  })
}
