
var one = 'x';
var two = null;
var three = 'x';
var four = 'x';
var five = 'x';
var six = 'x';
var seven = null;
var eight = null;
var nine = 'x';






var gameBoardRows = [[one, two, three],[four, five, six],[seven, eight, nine]];

//create column arrays
var gameBoardColumns = [[one, four, seven],[two, five, eight],[three, six, nine]];

var gameBoardDiagonals = [[one, five, nine],[three, five, seven]];


function gameWinner(gameBoard) {

for (i = 0 ; i < gameBoard.length ; i++) {
         console.log(gameBoard[i]);
    var Winner = true;

    for (x = 0 ; x < gameBoard[i].length ; x++) {
         console.log(gameBoard[i][x]);

            if (gameBoard[i][x] != 'x') {
              console.log("there is no chance");
                Winner = false;
             }

            else {
              console.log("might win");
             }

        }
          console.log(Winner);
          if (Winner){
                console.log("It looks like X won!!");
                }
                else {
                  console.log("x did not win");
                }
    }
}

gameWinner(gameBoardRows);

gameWinner(gameBoardColumns);

gameWinner(gameBoardDiagonals);








