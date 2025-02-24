// this is the bubble that is created inside the bottom panel
var clutter = ""; // this is the initial value of bubbles
function bubbles(){  // this is the funtion to create bubbles multiple times
for(var i = 1 ; i <=91 ; i++){
    var randnum = Math.floor(Math.random()*10)
     clutter +=  `<div id="bubble">${randnum}</div>`;
}
document.querySelector("#btm-P").innerHTML = clutter;
}
bubbles(); // here we have called the function

// this is the timer that is created inside the top panel
var time = 60; // this is the initial value of time
function timerValue(){ // this is the funtion to decrease time by 1 
  var timerun = setInterval(function(){
    if(time>0){
        time--;
        document.querySelector("#box3").innerHTML= time;
    }
    else{
        document.querySelector("#btm-P").innerHTML = `<h1 id = "timeover">Game Over</h1>`;
        clearInterval(timerun);
    }
  },1000);
}
timerValue(); // here we have called the function

// this is the score that is created inside the top panel
var score  = 0; // this is the initial value of score
function scoreVal(){ // this is the funtion to increase the score by 10
  score += 10;
  document.querySelector("#box1").innerHTML = score;
}
// scoreVal();// here we have called the function

var rannum ;
function hitVal(){
 rannum = Math.floor(Math.random()*10);
  document.querySelector("#box2").innerHTML = rannum;
}
hitVal();

var targetval ;
var targetdet = document.querySelector("#btm-P")
targetdet.addEventListener("click",function(details){
      targetval = (Number(details.target.textContent));
    if(targetval === rannum){
    scoreVal();
    // bubbles();
    hitVal();
    console.log("You have hit the right number congo ");
    }else{ 
        console.log("You have hit wrong number and your out");
    }
})


