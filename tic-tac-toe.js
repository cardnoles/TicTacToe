
function entireGame() {
document.getElementById("game").onclick = playGame;


  // initialize board
  var board = [];
    for (i = 0; i < 9; i++) {
    board[i] = null;
    }



  var playerX; //determined from input
  var playerO; //determined from input
  var firstPlayer; //determined from input
  var xIsFirst; //help determine which player is first
  var playerMove; //used to place the x or o in the box
  var gameOver = false; //games stops when gameOver is true

//determine if x or o should be used first
function firstMove() {
   if(firstPlayer === playerX){
        playerMove = 'x';
        xIsFirst = true;
      }

   else {
    playerMove = 'o';
    xIsFirst = false;
      }
   return playerMove;
}



//function to run the game
function playGame() {
    playerX = document.getElementById("playerX").value;
    playerO = document.getElementById("playerO").value;
    document.querySelector("h2#x").textContent = playerX + " is Player X";
    document.querySelector("h2#o").textContent = playerO + " is Player O";
    firstPlayer = document.getElementById("playerOne").value;
    document.querySelector("h3#alerts").textContent = firstPlayer + " clicks first";
    firstMove();
}


//function to determine the winner
function gameWinner(gameBoard) {
  //for loop runs through the array that contain arrays
  for (i = 0 ; i < gameBoard.length; i++) {
    var Winner = true;
    var xWinner = false;
    var oWinner = false;
    var xCounter = 0;
    var oCounter = 0;

      //for loop runs through the inner arrays
      for (x = 0 ; x < gameBoard[i].length ; x++) {
              //checks to see if x has won
              if (gameBoard[i][x] === 'x') {
                 xCounter += 1;
                   if(xCounter === 3 ){
                       xWinner = true;
                       gameOver = true;
                   }//closes if inside if
              }//closes check x if

              //checks to see if i o has won
              else if (gameBoard[i][x] === 'o') {
                  oCounter += 1;
                     if(oCounter === 3 ){
                         oWinner = true;
                         gameOver = true;
                     }//closes if inside if
              }//closes else if

              else {
                   Winner = false;
              }//closes else
      }//closes inner array loop line 58

       //declares the winner
    if (xWinner){
              document.querySelector("h3#alerts").textContent = playerX + " is the Winner!"
              }

    else if (oWinner){
              document.querySelector("h3#alerts").textContent = playerO + " is the Winner!"
              }
  } //closes first for loop line 50
} // closes gameWinner function



var moveCounter = 0; //counts the valid move clicks
var divElements = document.getElementsByTagName("div"); //gets info for boxes
var r; //random variable used in switch statement to fill the board array

//sets click listeners for the boxes
for (i = 0 ; i < divElements.length ; i++) {
    divElements[i].onclick = function() {
   //tells users if a box already has an x or an o
  if((this.querySelector("p").textContent === "X") || (this.querySelector("p").textContent === "O")) {
    document.querySelector("h3#alerts").textContent ='this box is occupied - choose again';
  }
  //runs this if box is empty
  else {
      //puts an X with some style in the box if it is X's turn
     if (playerMove === 'x') {
       this.querySelector("p").textContent = "X";
       this.querySelector("p").style.background = "white";
       this.querySelector("p").style.border = "5px solid gray";
       this.querySelector("p").style.color = "black";
       this.style.background = "black";
       }
     //puts an O with some style in the box if it is O's turn
     else {
       this.querySelector("p").textContent = "O";
       this.querySelector("p").style.background = "white";
       this.querySelector("p").style.border = "5px solid gray";
       this.querySelector("p").style.color = "red";
       this.style.background = "red";
       }
       //puts the id of the boxed clicked into the var boxNumber
  var boxNumber = this.id;

  //checks to see which box was clicked and puts an x or o in board array index
  switch(boxNumber) {

    case "one":
      r = 0;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "two":
      r = 1;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "three":
      r = 2;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "four":
      r = 3;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "five":
      r = 4;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "six":
      r = 5;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "seven":
      r = 6;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "eight":
      r = 7;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    case "nine":
      r = 8;
      playerMove === 'x' ? board[r] = 'x' : board[r] = 'o';
      break;
    default:
      r = "you missed the box";
  } //closes switch

  // puts values from switch in variables to go into arrays
  // probably could have put board[] in arrays, but this looks better to my eye
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

  //runs the gameWinner function to see if any of the arrays contain a winning combo
  gameWinner(gameBoardRows);
  gameWinner(gameBoardColumns);
  gameWinner(gameBoardDiagonals);

  //still in click function increments moveCounter if game is not over
  if (!gameOver) {
     moveCounter += 1;
         //sets player move label to x for even moves, o for odd if x player goes first
      if(xIsFirst) {
         if (moveCounter % 2 != 0) {
         playerMove = "o";
         document.querySelector("h3#alerts").textContent = "it is " + playerO +"'s turn";
         }
         else {
         playerMove = "x";
         document.querySelector("h3#alerts").textContent = "it is " + playerX +"'s turn";
         }
      }
      //sets player move label to o for even moves, x for odd if o player goes first
      else {
         if (moveCounter % 2 != 0) {
         playerMove = "x";
         document.querySelector("h3#alerts").textContent = "it is " + playerX +"'s turn";
         }
         else {
         playerMove = "o";
         document.querySelector("h3#alerts").textContent = "it is " + playerO +"'s turn";
         }
      }
      //declares a cat's tail game if move counter gets to 9 without a winner
      if (moveCounter === 9) {
      document.querySelector("h3#alerts").textContent = "cat's tail - no winner";
      }
    } //close gameOver if line 199
   } //closes else on 109
  } //closes onclick function
} //closes for
} //closes 'entire' function
entireGame();


//this function is ridiculous - need to create classes
function playAgain() {

  document.getElementById("textOne").textContent = "";
  document.getElementById("textOne").style.background = "";
  document.getElementById("textOne").style.border = "";
  document.getElementById("one").style.background = "";


  document.getElementById("textTwo").textContent = "";
  document.getElementById("textTwo").style.background = "";
  document.getElementById("textTwo").style.border = "";
  document.getElementById("two").style.background = "";

  document.getElementById("textThree").textContent = "";
  document.getElementById("textThree").style.background = "";
  document.getElementById("textThree").style.border = "";
  document.getElementById("three").style.background = "";

  document.getElementById("textFour").textContent = "";
  document.getElementById("textFour").style.background = "";
  document.getElementById("textFour").style.border = "";
  document.getElementById("four").style.background = "";

  document.getElementById("textFive").textContent = "";
  document.getElementById("textFive").style.background = "";
  document.getElementById("textFive").style.border = "";
  document.getElementById("five").style.background = "";

  document.getElementById("textSix").textContent = "";
  document.getElementById("textSix").style.background = "";
  document.getElementById("textSix").style.border = "";
  document.getElementById("six").style.background = "";

  document.getElementById("textSeven").textContent = "";
  document.getElementById("textSeven").style.background = "";
  document.getElementById("textSeven").style.border = "";
  document.getElementById("seven").style.background = "";

  document.getElementById("textEight").textContent = "";
  document.getElementById("textEight").style.background = "";
  document.getElementById("textEight").style.border = "";
  document.getElementById("eight").style.background = "";

  document.getElementById("textNine").textContent = "";
  document.getElementById("textNine").style.background = "";
  document.getElementById("textNine").style.border = "";
  document.getElementById("nine").style.background = "";

  document.querySelector("h2#x").textContent = "";
  document.querySelector("h2#o").textContent = "";
  document.getElementById("playerOne").value="";
  document.getElementById("playerX").value="";
  document.getElementById("playerO").value="";
  document.querySelector("h3#alerts").textContent = "enter info again and click 'play game' to play another game ";
  var board = [];
    for (i = 0; i < 9; i++) {
    board[i] = null;
    console.log(board);
    moveCounter = 0;
    }
    entireGame();
}

document.getElementById("again").onclick = playAgain;











