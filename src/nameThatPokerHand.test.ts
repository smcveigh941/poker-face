import nameThatPokerHand from './nameThatPokerHand'

describe('Name that poker hand', () => {
  it('should evaluate a royal flush', async () => {
    expect(await nameThatPokerHand('KH TH AH JH QH')).toEqual({ hand: 'KH TH AH JH QH', name: 'Royal flush' })
  })
})
