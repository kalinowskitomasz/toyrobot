# ToyRobot

A simple CLI simulator of toy robot moving on grid

## Prerequisites

node >= 18

## How to Run

First install dependencies
`npm i`

Application allows for two input types, file or stdin.

### File

`node index.js <filename>`
There are multiple sample files available in repository: `test1`, `test2`, `test3`

### Stdin

Just pass as a pipe to the program like that:

```
echo "PLACE 1,1,NORTH
MOVE
MOVE
REPORT" | node index.js
```

## Running tests

To execute the tests simply run
`npm run test`

## Tradeoffs

- Parser is not super fool proof, it might accept things like `MOVE 1`, which is ok as long as more relaxed, DOM like approach is fine

- direction is just stored simply as javascripty enum string, storing it as a degree radius would be more elegant but also harder to read
