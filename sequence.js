var board = [
  ['J2', 'S10', 'S12', 'S13', 'S1', 'D2', 'D3', 'D4', 'D5', 'J2'],
  ['S9', 'H10', 'H9', 'H8', 'H7', 'H6', 'H5', 'H4', 'H3', 'D6'],
  ['S8', 'H12', 'D7', 'D8', 'D9', 'D10', 'D12', 'D13', 'H2', 'D7'],
  ['S7', 'H13', 'D6','C2', 'H1', 'H13', 'H12', 'D1', 'S2', 'S8'],
  ['S6', 'H1', 'D5', 'C3', 'H4', 'H3', 'H10', 'C1', 'S3', 'D9'],
  ['S5', 'C2', 'D4', 'C4', 'H5', 'H2', 'H9', 'C13', 'S4', 'D10'],
  ['S4', 'C3', 'D3', 'C5', 'H6', 'H7', 'H8', 'C12', 'S5', 'D12'],
  ['S3', 'C4', 'D2', 'C6', 'C7', 'C8', 'C9', 'C10', 'S6', 'D13'],
  ['S2', 'C5', 'S1', 'S13', 'S12', 'S10', 'S9', 'S8', 'S7', 'D1'],
  ['J2', 'C6', 'C7', 'C8', 'C9', 'C10', 'C12', 'C13', 'C1', 'J2']
];

var boardState = Array(10).fill().map(()=>Array(10).fill(0));

//QUEEN - 12
//KING - 13
//ACE - 1
//HEART - HEART
//CLUBS - 3 LEAFED LEAF
//SPADES - SINGLE LEAFED LEAF
//DICE - DIAMOND

function fillBoard (board) {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      let card = board[i][j],
         type = card[0],
         yOffset = +card.substring(1);

      // based on the sprite
      let xOffset = {'J': 0, 'D': 1, 'S':2, 'H': 3, 'C': 4}[type]

      let xPos = -(128 + 106 * xOffset)
      let yPos = -(141 + 79 * (yOffset - 1))

      let cell = document.querySelector(`#cell-${i}-${j}`) 
      cell.setAttribute('style', `background: url('./images/Color_52_Faces_v.2.0.png') ${xPos}px ${yPos}px;`)
    }
  }
}


document.addEventListener('DOMContentLoaded', (event) => {
  let boardElem = document.querySelector('.board')
  console.log(board)
  for (var i = 0; i < 10; i++) {
    let rowDiv = document.createElement("div"); 
    rowDiv.setAttribute('class', 'row')
    boardElem.appendChild(rowDiv) 

    for (var j = 0; j < 10; j++){
      var colDiv = document.createElement('div')
      colDiv.setAttribute('class', 'cell')
      colDiv.setAttribute('id', 'cell-' + i + '-' + j)
      rowDiv.appendChild(colDiv)
    }    
  }// #e32214
   // #1dbf4b
   var coinColors = [['#e32214','orange'],['#1dbf4b','yellow']],
       turn = 22572;
  function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
  }

  // https://www.i-programmer.info/programming/graphics-and-imaging/3254-svg-javascript-and-the-dom.html
  var SVG=function(h,w){
    var NS="http://www.w3.org/2000/svg";
    var svg=document.createElementNS(NS,"svg");
    svg.width=w;
    svg.height=h;
    return svg;
   }

  document.querySelector('.board').addEventListener('click', (event) => {
    let elem = getEventTarget(event)
    if (elem.getAttribute("class") == 'cell') {
      var coordinates = elem.getAttribute('id').match(/[0-9]+\-[0-9]+/g)[0].split('-')
      if (!boardState[coordinates[0]][coordinates[1]]) {
        console.log('clicked')
        boardState[coordinates[0]][coordinates[1]] = 1

        let coinDiv = SVG(94, 70)

        let strokeColor = coinColors[turn % 2][0]
        let fillColor = coinColors[turn % 2][1]
        console.log(strokeColor, fillColor)
        coinDiv.innerHTML = `<circle cx="47" cy="35" r="25" stroke= "${strokeColor}" stroke-width="8" fill="${fillColor}"/>`;
        elem.appendChild(coinDiv)
        turn++
      }
    }
  })

  fillBoard(board)
})