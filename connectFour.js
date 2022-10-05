// variables for gameplay go here
const changeStatus = document.querySelector('#board')
let inTurn = 'yellow'
// let replayGame = document.getElementById('replay')
let value = [
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
const winner = document.querySelector('#valueWinner')
// let noWinner = 'draw'
let gameLive = true
const displayInTurn = document.querySelector('#inTurnPlayer')
const boxes = document.querySelectorAll('.box')
let yellow = document.querySelector('.yellow')
// alternate from yellow to blue

//if my color is white then it should change to whatever player turn it is else it should do nothing
document.querySelectorAll('.cell').forEach((cell) => {
  cell.addEventListener('click', () => {
    if (inTurn === 'yellow') {
      inTurn = 'blue'
      displayInTurn.innerHTML = inTurn
      // console.log(box.style.backgroundColor)
      // winCondition()
      return (box.style.backgroundColor = 'yellow')
    }
    if (inTurn === 'blue') {
      inTurn = 'yellow'
      displayInTurn.innerHTML = inTurn
      // winCondition()
      return (box.style.backgroundColor = 'blue')
      // } else if (inTurn !== 'blue' || 'yellow') {
      //   inTurn !== 'yellow' || 'blue'
      //   return (box.style.backgroundColor = 'white')
    } else {
      return false
    }
  })
})

// const winCondition = () => {
//   if (
//     value[0] === 'yellow' &&
//     value[1] === 'yellow' &&
//     value[2] === 'yellow' &&
//     value[3] === 'yellow'
//   ) {
//     winner.innerHTML = 'yellow Won'
//   }
// } else if (value[0] === 'o' && value[1] === 'o' && value[2] === 'o') {
//   winner.innerHTML = 'O Won'
// } else if (value[3] === 'o' && value[4] === 'o' && value[5] === 'o') {
//   winner.innerHTML = 'O Won'
// } else if (value[6] === 'o' && value[7] === 'o' && value[8] === 'o') {
//   winner.innerHTML = 'O Won'
// } else if (value[0] === 'o' && value[3] === 'o' && value[6] === 'o') {
//   winner.innerHTML = 'O Won'
// } else if (value[1] === 'o' && value[4] === 'o' && value[7] === 'o') {
//   winner.innerHTML = 'O Won'
// } else if (value[2] === 'o' && value[5] === 'o' && value[8] === 'o') {
//   winner.innerHTML = 'O Won'
// } else if (value[2] === 'O Won' && value[4] === 'o' && value[6] === 'o') {
//   winner.innerHTML = 'O Won'
//   gameLive = false
// }
// if (value[0] === 'x' && value[4] === 'x' && value[8] === 'x') {
//   winner.innerHTML = 'x won'
// } else if (value[0] === 'x' && value[1] === 'x' && value[2] === 'x') {
//   winner.innerHTML = 'x won'
// } else if (value[3] === 'x' && value[4] === 'x' && value[5] === 'x') {
//   winner.innerHTML = 'x won'
// } else if (value[6] === 'x' && value[7] === 'x' && value[8] === 'x') {
//   winner.innerHTML = 'x won'
// } else if (value[0] === 'x' && value[3] === 'x' && value[6] === 'x') {
//   winner.innerHTML = 'x won'
// } else if (value[1] === 'x' && value[4] === 'x' && value[7] === 'x') {
//   winner.innerHTML = 'x won'
// } else if (value[2] === 'x' && value[5] === 'x' && value[8] === 'x') {
//   winner.innerHTML = 'x won'
// } else if (value[2] === 'x' && value[4] === 'x' && value[6] === 'x') {
//   winner.innerHTML = 'x won'
//   gameLive = false
// }

const replayGame = document.getElementById('replay')

replayGame.addEventListener('click', () => {
  return box.remove.backgroundColor(box)
})
