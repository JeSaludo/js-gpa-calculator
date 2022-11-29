//gpa formula =  -4 / number of items * score + 5
// gpa => 1 - 3 text color green
// gpa => 3 - 5 text color red

let score = document.getElementById("score");
let numOfItem = document.getElementById("noItems");
let scoreGpa = document.getElementById("scoreGpa");
let gpa = 0;

document.getElementById("btnCalc").addEventListener('click', viewScore);
function viewScore(){
   
   gpa = -4 / numOfItem.value * score.value + 5;

    if(gpa >= 3 && gpa <= 5)
        scoreGpa.style.color= "red";
    else{
        scoreGpa.style.color= "green";
    }

    scoreGpa.value = gpa;



}