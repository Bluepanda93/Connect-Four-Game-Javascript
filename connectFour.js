// variables for gameplay go here
const changeStatus = document.querySelector('#board')
let inTurn = 'yellow'
// let replayGame = document.getElementById('replay')
let value = ['', '', '', '', '', '', '', '', '']
const winner = document.querySelector('#valueWinner')
let noWinner = 'draw'
let gameLive = true
const displayInTurn = document.querySelector('#inTurnPlayer')
// let resetGame = () => {
//   for (let i = 0; i <= 43; i++) {
//     clearBox(i)
//   }
// }

// alternate from yellow to blue

document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('click', () => {
    // if (box[i + 6].classList.contains('taken')) {
    if (inTurn === 'yellow') {
      // box[i].classList.add('taken')
      // box[i].classList.add('yellow')
      inTurn = 'blue'
      displayInTurn.innerHTML = inTurn
      return (box.style.backgroundColor = 'yellow')
    } else {
      inTurn = 'yellow'
      return (box.style.backgroundColor = 'blue')
    }
  })
})

// const replayGame = document.getElementById('replay')

// replayGame.addEventListener('click', () => {
//   resetGame()
// })
// resetGame()
// document.querySelector('.replay').addEventListener('click', () => {
//   document.querySelectorAll('.box').forEach((box) => {
//     box.remove()
//   })
// })
