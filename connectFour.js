// variables for gameplay go here

const changeStatus = document.querySelector('#board')
let turn = 'yellow'
let replayGame = document.getElementById('replay')
let value = ['', '', '', '', '', '', '', '', '']
const winner = document.querySelector('#valueWinner')
let noWinner = 'draw'
let gameLive = true

// alternate from yellow to blue

document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('click', () => {
    if (turn === 'yellow') {
      turn = 'blue'
      return (box.style.backgroundColor = 'yellow')
    } else {
      turn = 'yellow'
      return (box.style.backgroundColor = 'blue')
    }
  })
})
