var score1 = 0;     // score of player 1
var score2 = 0;     // score of player 2

var dice1 = 0;      // value of 1st dice
var dice2 = 0;      // value of 2nd dice

var player1 = true;
/* 
if player1 = true, then it is player 1's turn
if player1 = false, then it is player 2's turn
*/

function roll(){
    dice1 = Math.floor((Math.random() * 6) + 1);        /* generate integer values between 0 and 7 */
    document.getElementById("dice1").src = "./img/dice_"+dice1+".png"
    document.getElementById("dice1").alt = "Dice "+dice1;

    dice2 = Math.floor((Math.random() * 6) + 1);        /* generate integer values between 0 and 7 */
    document.getElementById("dice2").src = "./img/dice_"+dice2+".png"    
    document.getElementById("dice2").alt = "Dice "+dice2;
}

function play(){
    if(score1 <= 100 && score2 <= 100){
        /* player 1's turn */
        if(player1 == true){
            document.getElementById("status").innerHTML = "Player I's turn";

            roll();

            if(dice1 == 1 && dice2 == 1){
                score1 = 0;
                player1 = false;
            }else if(dice1 == dice2){
                score1 += dice1 + dice2;
            }else{
                player1 = false;
                score1 += dice1 + dice2;
            }

            document.getElementById("score1").innerHTML = score1;
        /* player 2's turn */
        }else{
            document.getElementById("status").innerHTML = "Player II's turn";

            roll();

            if(dice1 == 1 && dice2 == 1){
                score2 = 0;
                player1 = true;
            }else if(dice1 == dice2){
                score2 += dice1 + dice2;
            }else{
                player1 = true;
                score2 += dice1 + dice2;
            }

            document.getElementById("score2").innerHTML = score2;
        }
    }

    if(score1 >= 100 || score2 >= 100){
        if(score1 >= 100){
            document.getElementById("status").innerHTML = "Player I won!";
        }else{
            document.getElementById("status").innerHTML = "Player II won!";
        }

        document.getElementById("butn1").innerHTML = "-";
        document.getElementById("butn1").disabled = true;
    }
}

function reset(){
    location.reload();
}