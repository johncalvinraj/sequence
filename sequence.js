document.addEventListener('DOMContentLoaded', (event) => {
  let board = document.querySelector('.board')
  console.log(board)
  for (var i = 0; i < 10; i++) {
    let rowDiv = document.createElement("div"); 
    rowDiv.setAttribute('class', 'row')
    board.appendChild(rowDiv) 

    for (var j = 0; j < 10; j++){
      let colDiv = document.createElement('div')
      colDiv.setAttribute('class', 'cell')
      colDiv.setAttribute('id', 'cell-' + i + ',' + j)
      rowDiv.appendChild(colDiv)
    }    
  }
})