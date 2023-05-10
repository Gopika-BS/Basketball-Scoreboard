let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
// console.log(guestScore);

let count = 0
// HOME Scoreboard
function hbtn1(){
   count = count + 1 ;
   homeScore.textContent = count
}

function hbtn2(){
   count = count + 2 ;
   homeScore.textContent = count
}
 function hbtn3(){
    count = count + 3 ;
   homeScore.textContent = count
}

// Gurst Scoreboard
let count2 = 0

function gbtn1(){
 count2 = count2 + 1 ;
 guestScore.textContent = count2
 }
    
 function gbtn2(){
   count2 = count2 + 2 ;
   guestScore.textContent = count2
   }
 function gbtn3(){
   count2 = count2 + 3 ;
   guestScore.textContent = count2
   }