var timer=60;
var score=0;
var hitrn=0;

function increaseScore(){
   score += 10;
   document.querySelector(".scoreval").textContent=score;
}


function gethit(){
   hitrn=Math.floor(Math.random()*10);
   document.querySelector(".hitval").textContent=hitrn;

}
function make() {
   
var clutter="";
for(var i=0;i<=149;i++){
   var rn=Math.floor(Math.random()*10)
   clutter += `<div id="bubble">${rn}</div>`;

}
document.querySelector("#pbottom").innerHTML = clutter; 

}
function runTimer(){
var timerint=setInterval(function(){
   if (timer>0) {
      timer--;  
      document.querySelector(".timerval").textContent=timer;
   }
   else{
      clearInterval(timerint)
      document.querySelector("#pbottom").innerHTML="<h1>Game over</h1>"
   }
},1000)
}

document.querySelector("#pbottom").addEventListener("click",function(dets){
// alert("are bhai kaha pe click kar raha he to");
var clicknumber=(Number(dets.target.textContent));
if(clicknumber===hitrn){
   increaseScore();
   make();
   gethit();
}
})
runTimer();
make();
gethit();