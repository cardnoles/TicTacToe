//var what = document.querySelector("p#textOne").textContent = 'x';
//console.log(what)

  // initialize board
var board = [];
for (i = 0; i < 9; i++) {
  board[i] = null;
}

var gameOver = false;

var playerX;
var playerO;
var firstPlayer;
var secondPlayer;
var xIsFirst;




function playGame() {
   alert("ready to play");
    playerX = prompt("enter the name of player x");
    playerO = prompt("enter the name of player o");
    document.querySelector("h2#x").textContent = playerX + " is Player X";
    document.querySelector("h2#o").textContent = playerO + " is Player O";
    firstPlayer = prompt("who is playing first?");
    document.querySelector("h3#alerts").textContent = firstPlayer + " clicks first";
   //alert(firstPlayer + " click on a box");


console.log(playerX);
console.log(playerO);
console.log(firstPlayer);
}




function gameWinner(gameBoard) {

for (i = 0 ; i < gameBoard.length; i++) {
    var Winner = true;
    var xWinner = false;
    var oWinner = false;
    var xCounter = 0;
    var oCounter = 0;



    for (x = 0 ; x < gameBoard[i].length ; x++) {

              if (gameBoard[i][x] === 'x') {
              xCounter += 1;
              //console.log("this is the xCounter: " + xCounter);
               if(xCounter === 3 ){
                //console.log("x is the winner");
                xWinner = true;
                gameOver = true;
               }//closes if inside if
             }//closes else if



              else if (gameBoard[i][x] === 'o') {
              oCounter += 1;
              console.log("this is the oCounter: " + oCounter);
               if(oCounter === 3 ){
                console.log("o is the winner");
                oWinner = true;
                gameOver = true;
               }//closes if inside if
             }//closes else if

               else if (gameBoard[i][x] != 'x' && gameBoard[i][x] != 'o') {
              //console.log("there is no chance");
                Winner = false;
             }//closes else if


            else {
              //console.log("no winner");
              Winner = false;
             }//closes else

        }//closes second for loop

        /*console.log("x won? " + xWinner);
             //console.log("o won? " + oWinner);*/

             if (xWinner){
              document.querySelector("h3#alerts").textContent = playerX + " is the Winner!"
              //alert(playerX + " is the Winner!");
              }//closes if xWinner

             else if (oWinner){
              document.querySelector("h3#alerts").textContent = playerO + " is the Winner!"
              //alert(playerO + " is the Winner");
                }//closes if oWinner

              /*else {
                alert("there is no winner");
                }//closes else*/

      } //closes first for loop


} // gameWinner closes function


   function firstMove() {
   if(firstPlayer === playerX){
        playerMove = 'x';
        xIsFirst = true;
      }

   else {
    playerMove = 'o';
    xIsFirst = false;
      }
      console.log("this is playerMove " + playerMove);
      return playerMove;
  }

var moveCounter = 0;




var divElements = document.getElementsByTagName("div");
var r;

for (i = 0 ; i < divElements.length ; i++) {
divElements[i].onclick = function() {


  if((this.querySelector("p").textContent === "X") || (this.querySelector("p").textContent === "O")) {
    alert ('this box is occupied - choose again');
  }


  else {
     if (playerMove === 'x') {
       this.querySelector("p").textContent = "X";
       this.querySelector("p").style.background = "white";
       this.querySelector("p").style.border = "5px solid gray";
       this.style.background = "black";
  }
     else {
       this.querySelector("p").textContent = "O";
       this.querySelector("p").style.background = "white";
       this.querySelector("p").style.border = "5px solid gray";
       this.querySelector("p").style.color = "red";
       this.style.background = "red";
  }
  var boxNumber = this.id;
  //console.log(boxNumber);
  //console.log("this is board r: " + board[r]);

switch(boxNumber) {
  case "one":
    r = 0;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
   }
    break;
  case "two":
    r = 1;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
   }
    break;
  case "three":
    r = 2;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
   }
    break;
  case "four":
    r = 3;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
   }
    break;
  case "five":
    r = 4;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
   };
    break;
  case "six":
    r = 5;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
     }
    break;
  case "seven":
    r = 6;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
     }
    break;
  case "eight":
    r = 7;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
   }
    break;
  case "nine":
    r = 8;
    if (playerMove === 'x') {
      board[r] = 'x';
     }
    else {
    board[r] = 'o';
   }
    break;
  default:
    r = "you missed the box";
    } //closes switch
//console.log(r);
//console.log(board[r]);
console.log(board);
//console.log("this is box 3 " + board[2]);

var one = board[0];
var two = board[1];
var three = board[2];
var four = board[3];
var five = board[4];
var six = board[5];
var seven = board[6];
var eight = board[7];
var nine = board[8];

//create row arrays
var gameBoardRows = [[one, two, three],[four, five, six],[seven, eight, nine]];

//create column arrays
var gameBoardColumns = [[one, four, seven],[two, five, eight],[three, six, nine]];

//create diagonal arrays
var gameBoardDiagonals = [[one, five, nine],[three, five, seven]];

//console.log(gameBoardRows);

gameWinner(gameBoardRows);
gameWinner(gameBoardColumns);
gameWinner(gameBoardDiagonals);





if (!gameOver) {
moveCounter += 1;

console.log(moveCounter);
  if(xIsFirst) {

       if (moveCounter % 2 != 0) {
         playerMove = "o";
         document.querySelector("h3#alerts").textContent = "it is " + playerO +"'s turn";
         //alert("it is " + playerO +"'s turn");
       }
       else {
          playerMove = "x";
          document.querySelector("h3#alerts").textContent = "it is " + playerX +"'s turn";
          //alert("it is " +  playerX +"'s turn");
       }
  }
  else {
       if (moveCounter % 2 != 0) {
         playerMove = "x";
         document.querySelector("h3#alerts").textContent = "it is " + playerX +"'s turn";
         //alert("it is " +  playerX +"'s turn");
       }
       else {
          playerMove = "o";
          document.querySelector("h3#alerts").textContent = "it is " + playerO +"'s turn";
          //alert("it is " + playerO +"'s turn");
       }
  }
} //close gameOver if
else {
  console.log("announce winner and reset game");
}


     }//closes else on 133
  } //closes onclick function

} //closes for

playGame(); //line 18
firstMove(); // line 99






/*
for (i = 0 ; i < gameBoard.length; i++) {
         console.log(gameBoard[i]);
    var Winner = true;
    var xWinner = false;
    var oWinner = false;
    var xCounter = 0;
    var oCounter = 0;

    for (x = 0 ; x < gameBoard[i].length ; x++) {
         console.log(gameBoard[i][x]);
         var clickValue = gameBoard[i][x];
         console.log(clickValue);


            if (gameBoard[i][x] === 'x') {

              xCounter += 1;
              console.log("this is the xCounter: " + xCounter);

               if(xCounter === 3 ){
                xWinner = true;
               }//closes if inside if
             }//closes if

              else if (gameBoard[i][x] === 'o') {
              oCounter += 1;
              console.log("this is the oCounter: " + oCounter);
               if(oCounter === 3 ){
                oWinner = true;
               }//closes if inside if
             }//closes else if

               else if (gameBoard[i][x] != 'x' && gameBoard[i][x] != 'o') {
              console.log("there is no chance");
                Winner = false;
             }//closes else if


            else {
              console.log("no winner");
              Winner = false;
             }//closes else

        }//closes second for loop

        console.log("x won? " + xWinner);
             console.log("o won? " + oWinner);

             if (xWinner){
              console.log("The winner is x!!");
              var winStr = "the winner is x";
              return winStr;
             }//closes if xWinner

             else if (oWinner){
              console.log("the winner is o!!");
              winStr = "the winner is o";
              return winStr;
                }//closes if oWinner

              else {
                console.log("Cat's tail");
                }//closes else

      } //closes first for loop

} //closes function


gameWinner(gameBoardRows);
gameWinner(gameBoardColumns);
gameWinner(gameBoardDiagonals);*/


        /*if (gameBoard[i][x] === 'x') {
              xCounter += 1;
              console.log("this is the xCounter " + xCounter);
               if(xCounter === 3 ){
                xWinner = true;
                //gameOver = true;
               }//closes inside if
             }//closes if

              else if (gameBoard[i][x] === 'o') {
              oCounter += 1;
              console.log("this is the oCounter " + oCounter);
               if(oCounter === 3 ){
                oWinner = true;
                //gameOver = true;
               }//closes if inside if
             }//closes else if

            else {
              //console.log("no winner");
              Winner = false;
             }//closes else*/













