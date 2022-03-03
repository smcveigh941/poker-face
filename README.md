Poker Face
=======================================
### Requirements:
In a language of your choice write a program that names a poker hand. The program should convert each line of input into the name of the corresponding poker hand. The name of the hand will be one of:

    High card
    One pair
    Two pair
    Three of a kind
    Straight
    Flush
    Full house
    Four of a kind
    Straight flush
    Royal Flush


For a full definition of how poker hands can be named see http://en.wikipedia.org/wiki/List_of_poker_hands.

In our case, input will be defined in a file. There will be 1 line for each hand. A hand will contain 5 valid card descriptions. Each description is in the form CS, where C is the name of the card (2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A) and S is the suit (H, D, S, C for Hearts, Diamonds, Spades and Clubs respectively).

Example hands:

    3H JS 3C 7C 5D
    JH 2C JD 2H 4C
    9H 9D 3S 9S 9C
    9C 3H 9S 9H 3S

When run through your program, this file will produce the following output:


    $ poker hands.txt
    
    3H JS 3C 7C 5D => One pair
    JH 2C JD 2H 4C => Two pair
    9H 9D 3S 9S 9C => Four of a kind
    9C 3H 9S 9H 3S => Full house

Installation
=====================
```bash
npm install
npm run build
npm install -g
```

Running tests
=====================
```bash
npm run test
```
