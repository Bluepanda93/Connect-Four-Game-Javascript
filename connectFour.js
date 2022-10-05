// variables for gameplay go here
const changeStatus = document.querySelector('#board')
let inTurn = 'yellow'
const winner = document.querySelector('#valueWinner')
const displayInTurn = document.querySelector('#inTurnPlayer')
let column = document.querySelectorAll('.box')
let yellow = document.querySelector('.yellow')

column.forEach((box) => {
  let last = 5
  box.addEventListener('click', (event) => {
    let cells = event.currentTarget.children
    console.log(cells)
    if (inTurn === 'yellow') {
      cells[last].classList.add('yellow')
      inTurn = 'blue'
      if (last >= 0) {
        last--
      }
    } else {
      cells[last].classList.add('blue')
      inTurn = 'yellow'
      if (last >= 0) {
        last--
      }
    }
  })
})

const replayGame = document.getElementById('replay')
const cell = document.querySelectorAll('cell')

replayGame.addEventListener('click', () => {
  return cell.remove.backgroundColor('yellow')
})
