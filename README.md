# TicTac Toe with file in input

### Prerequisites

File with the following format:
X 0 1
0 1 1
...

### Aim

The goal is to create a TicTacToe game on a 3x3 grid
The grid is indexed from ** 0 **

Example:
    0   1   2
  -------------
0 | X | O |   |
  -------------
1 | X |   |   |
  -------------
2 | O |   | X |
  -------------

## Input

Example1:
  X x1 y1
  O x2 y2
  O x3 y3

  Example2:
  X x1 y1
  O x2 y2

  X and O are the players.
  xi and yi correspond to the position at which the point is to be set



## Output

  If the input is not valid, print 'invalid input'

  If the input is valid, print:
  - if the game is not finished: 'game not over'
  - if tie: 'no winner'
  - if one of the players wins: 'player X / O won'

  For the given examples:
  - example1 will print 'invalid input'
  - example2 will print 'game not over'


## Rules

  - Player X begins
  - players must alternate (one player can not play twice in a row)
  - a position can not be taken several times
  - a player wins when he has one of the vertical, horizontal or diagonal
