// variables for gameplay go here
const wins = document.querySelectorAll('#board div')
let inTurn = 'yellow'
const won = document.querySelector('#valueWinner')
const displayInTurn = document.querySelector('#inTurnPlayer')
let column = document.querySelectorAll('.box')
let yellow = document.querySelector('.yellow')
const winningMessage = document.querySelector('.playerWins')

const jsBoard = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]

const winningConditions = [
  [5, 10, 15, 20],
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34]
]

column.forEach((box) => {
  let last = 5
  box.addEventListener('click', (event) => {
    let cells = event.currentTarget.children
    let indexPosition = parseInt(cells[last].id)
    if (inTurn === 'yellow') {
      jsBoard[indexPosition] = 'yellow'
      displayInTurn.innerHTML = 'blue'
      cells[last].classList.add('yellow')
      inTurn = 'blue'
      if (last >= 0) {
        last--
      }
    } else if (inTurn === 'blue') {
      jsBoard[indexPosition] = 'blue'
      displayInTurn.innerHTML = 'yellow'
      cells[last].classList.add('blue')
      inTurn = 'yellow'
      if (last >= 0) {
        last--
      }
    }
    checkWinningConditions()
  })
})

const checkWinningConditions = () => {
  let winner = false
  for (let i = 0; i < winningConditions.length; i++) {
    if (
      jsBoard[winningConditions[i][0]] === 'yellow' &&
      jsBoard[winningConditions[i][1]] === 'yellow' &&
      jsBoard[winningConditions[i][2]] === 'yellow' &&
      jsBoard[winningConditions[i][3]] === 'yellow'
    ) {
      winningMessage.innerHTML = 'yellow won'
      winner = true
      console.log('this is a yellow winning condition')
      console.log(jsBoard)
    } else if (
      jsBoard[winningConditions[i][0]] === 'blue' &&
      jsBoard[winningConditions[i][1]] === 'blue' &&
      jsBoard[winningConditions[i][2]] === 'blue' &&
      jsBoard[winningConditions[i][3]] === 'blue'
    ) {
      winningMessage.innerHTML = 'blue won'
      winner = true
      console.log('this is a blue winning condition')
    }
  }
}

const replayGame = document.querySelector('.replayButton')
let cells = document.querySelectorAll('.cell')

replayGame.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.classList.add('antiquewhite')
    console.log(cell)
  })
  // cell.classList.remove('.yellow')
  // console.log(cell)
})
