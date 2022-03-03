import nameThatPokerHand from './nameThatPokerHand'

describe('Name that poker hand', () => {
  it('should evaluate royal flush', async () => {
    expect(await nameThatPokerHand('KH TH AH JH QH')).toEqual({ hand: 'KH TH AH JH QH', name: 'Royal flush' })
  })
  it('should evaluate straight flush', async () => {
    expect(await nameThatPokerHand('3H 7H 4H 6H 5H')).toEqual({ hand: '3H 7H 4H 6H 5H', name: 'Straight flush' })
  })
  it('should evaluate four of a kind', async () => {
    expect(await nameThatPokerHand('5C 5S 5D 3D 5H')).toEqual({ hand: '5C 5S 5D 3D 5H', name: 'Four of a kind' })
  })
  it('should evaluate full house', async () => {
    expect(await nameThatPokerHand('6S 6H KC 6D KH')).toEqual({ hand: '6S 6H KC 6D KH', name: 'Full house' })
  })
  it('should evaluate flush', async () => {
    expect(await nameThatPokerHand('JD 9D 8D 4D 3D')).toEqual({ hand: 'JD 9D 8D 4D 3D', name: 'Flush' })
  })
  it('should evaluate straight', async () => {
    expect(await nameThatPokerHand('4D 5D 2S 3H AC')).toEqual({ hand: '4D 5D 2S 3H AC', name: 'Straight' })
  })
  it('should evaluate three of a kind', async () => {
    expect(await nameThatPokerHand('5C 2S 5D 3D 5H')).toEqual({ hand: '5C 2S 5D 3D 5H', name: 'Three of a kind' })
  })
  it('should evaluate two pair', async () => {
    expect(await nameThatPokerHand('5C 3S 5D 3D AH')).toEqual({ hand: '5C 3S 5D 3D AH', name: 'Two pair' })
  })
  it('should evaluate one pair', async () => {
    expect(await nameThatPokerHand('5C 3S 5D TD AH')).toEqual({ hand: '5C 3S 5D TD AH', name: 'One pair' })
  })
  it('should evaluate high card', async () => {
    expect(await nameThatPokerHand('5C 3S 2D TD AH')).toEqual({ hand: '5C 3S 2D TD AH', name: 'High card' })
  })
  it('should evaluate invalid hand as unknown', async () => {
    expect(await nameThatPokerHand('5C 5S 5H 5D 5D')).toEqual({ hand: '5C 5S 5H 5D 5D', name: 'Unknown' })
  })
  it('should throw an error if the wrong number of cards are supplied', async () => {
    await expect(() => nameThatPokerHand('5C 5S 5H 5D')).rejects.toThrow(
      '4 cards were supplied, a poker hand must have exactly 5 cards'
    )
  })
  it('should sanitise input', async () => {
    await expect(() => nameThatPokerHand('     5C   testing   5S      5H      5D      ')).rejects.toThrow(
      '4 cards were supplied, a poker hand must have exactly 5 cards'
    )
  })
})
