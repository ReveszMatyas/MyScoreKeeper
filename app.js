var playTo = 3;
var player1Score = 0;
var player2Score = 0;


const span1 = document.querySelector("#span-1");
const span2 = document.querySelector("#span-2");
const selector = document.querySelector("#max-score-select");
const player1Button = document.querySelector("#p1-plus");
const player2Button = document.querySelector("#p2-plus");
const resetButton = document.querySelector("#reset-btn")


function headerRefresh(){
  span1.innerText = player1Score;
  span2.innerText = player2Score;
  if (player1Score == playTo){
    span1.style.color = "green";
    span2.style.color = "red";
    player1Button.disabled = true;
    player2Button.disabled = true;
  }
  if (player2Score == playTo){
    span2.style.color = "green";
    span1.style.color = "red";
    player1Button.disabled = true;
    player2Button.disabled = true;
  }
  if (player1Score != playTo && player2Score != playTo){
    span2.style.color = "black";
    span1.style.color = "black";
    player1Button.disabled = false;
    player2Button.disabled = false;
  }
};

selector.addEventListener("change", function() {
  player1Score = 0;
  player2Score = 0;
  playTo = this.value;
  headerRefresh();
});

player1Button.addEventListener("click", function(){
  player1Score++;
  headerRefresh();
});

player2Button.addEventListener("click", function(){
  player2Score++;
  headerRefresh();
});

resetButton.addEventListener("click", function(){
  player1Score = 0;
  player2Score = 0;
  headerRefresh();
});


