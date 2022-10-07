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
  [0, 1, 2, 3],
  [0, 7, 14, 21],
  [0, 6, 12, 18],
  [1, 8, 15, 22],
  [1, 2, 3, 4],
  [1, 7, 13, 19],
  [2, 9, 16, 23],
  [2, 3, 4, 5],
  [2, 8, 14, 20],
  [3, 9, 15, 21],
  [3, 8, 13, 18],
  [3, 2, 1, 0],
  [4, 10, 16, 22],
  [4, 9, 14, 19],
  [4, 3, 2, 1],
  [5, 4, 3, 2],
  [5, 10, 15, 20],
  [5, 11, 17, 23],
  [6, 7, 8, 9],
  [6, 13, 20, 27],
  [6, 12, 18, 24],
  [7, 8, 9, 10],
  [7, 14, 21, 28],
  [7, 13, 19, 25],
  [8, 9, 10, 11],
  [8, 15, 22, 29],
  [8, 14, 20, 26],
  [9, 8, 7, 6],
  [9, 14, 19, 24],
  [9, 15, 21, 27],
  [10, 9, 8, 7],
  [10, 15, 20, 25],
  [10, 16, 22, 28],
  [11, 10, 9, 8],
  [11, 17, 23, 29],
  [11, 16, 21, 26],
  [12, 18, 24, 30],
  [12, 19, 26, 33],
  [12, 13, 14, 15],
  [13, 14, 15, 16],
  [13, 20, 27, 34],
  [13, 19, 25, 31],
  [14, 15, 16, 17],
  [14, 21, 28, 35],
  [14, 20, 26, 32],
  [15, 21, 27, 33],
  [15, 20, 25, 30],
  [16, 22, 28, 34],
  [16, 21, 26, 31],
  [17, 23, 29, 35],
  [17, 22, 27, 32],
  [18, 19, 20, 21],
  [18, 25, 32, 39],
  [18, 24, 30, 36],
  [19, 20, 21, 22],
  [19, 25, 31, 37],
  [19, 26, 33, 40],
  [20, 21, 22, 23],
  [20, 27, 34, 41],
  [20, 26, 32, 38],
  [21, 27, 33, 39],
  [21, 26, 31, 36],
  [22, 28, 34, 40],
  [22, 27, 32, 37],
  [23, 29, 35, 41],
  [23, 28, 33, 38],
  [24, 25, 26, 27],
  [25, 26, 27, 28],
  [26, 27, 28, 29],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [32, 33, 34, 35],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41]
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
  window.location.reload()
})
