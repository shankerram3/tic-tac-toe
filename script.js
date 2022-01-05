// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelectorAll('.reset');
const cellDivs = document.querySelectorAll('.grid-cell');
const modalcont =document.querySelector('.modal-container');
const close = document.getElementById('close');

//game variables
let gameisLive = true ;
let xIsNext = true;


//functions

const handleWin =(cell) =>{
  modalcont.classList.add('show');
    
}


const updateGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];
  
    // check winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[1].classList.add('won');
      cellDivs[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
      handleWin(middleLeft);
      cellDivs[3].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
      handleWin(bottomLeft);
      cellDivs[6].classList.add('won');
      cellDivs[7].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[3].classList.add('won');
      cellDivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
      handleWin(topMiddle);
      cellDivs[1].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
      handleWin(topRight);
      cellDivs[2].classList.add('won');
      cellDivs[5].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
      handleWin(topRight);
      cellDivs[2].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[6].classList.add('won');
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
      gameIsLive = false;
      statusDiv.innerHTML = 'Game is tied!';
 }

}
//event Handlers
const handleReset = (e) => { 
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
    modalcont.classList.remove('show')
  }

};

const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = e.target.classList[1];
if (classList[2] === 'x' || classList[2] === 'o'){ //mistake was here
    return;
}

    if(xIsNext){
        classList.add('x');
        xIsNext = false;
        statusDiv.innerHTML = "o is next";
        updateGameStatus();
      }
      else if(xIsNext ==  false){
              
          classList.add('o');
          xIsNext = true;
          statusDiv.innerHTML = "X is next";
          updateGameStatus();
      }
  
      };
  
  
  //event listeners
  for(const resetDivs of resetDiv)
  resetDivs.addEventListener('click', handleReset);
  
  
  for (const cellDiv of cellDivs){
cellDiv.addEventListener('click',handleCellClick);
}