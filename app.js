var origBoard;
const huPlayer = "O";
const huPlayer2 = "X";
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [6, 4, 2]
      
]

const cells = document.querySelectorAll('.cell');
startGame();
//function to start game
function startGame() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(8).keys());//load into origBoard variable
    //fancy way to make array be from 0-8
    for (var i = 0; i <cells.length; i++) { //removing all x's and o's to restart game
    cells[i].innerText =''; //cells[i] is each cell 
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);
}
}

function turnClick(square) {
if (typeof origBoard[square.target.id] == 'number') {turn(square.target.id, huPlayer)//call turn function. player gets to play. either human or ai
    
}

}

function turn(squareId,player){
    origBoard[squareId] = player; //will show player who took turn in spot
    document.getElementById(squareId).innerText = huPlayer; //update array to see where you clicked, the square id from html //select element by Id

}


var checkWin = function () {
   for(var i = 0; i < winCombos.length; i++) {
if(winCombos[i] === "X" || winCombos[i] === "O") {
alert("You Win!");
} else {
    alert("Next Player Turn")
}


   }


}


   function turn(squareId,player){
    origBoard[squareId] = player; //will show player who took turn in spot
    document.getElementById(squareId).innerText = huPlayer2; //update array to see where you clicked, the square id from html //select element by Id

}

