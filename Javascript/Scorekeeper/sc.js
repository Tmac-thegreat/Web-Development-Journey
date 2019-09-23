let p1Button = document.querySelector('#p1');
let p2Button = document.getElementById('p2');
let reset = document.getElementById('reset');

let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let num = document.querySelector('input');
let game = document.querySelector('#games');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener('click', function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Display.classList.add('victor')
      gameOver = true;
    }
  }
    p1Display.textContent = p1Score;
  })

p2.addEventListener('click', function(){
  if(!gameOver){
    p2Score++;
  }
  if(p2Score === winningScore){
    p2Display.classList.add('victor')
    gameOver = true;
  }
  p2Display.textContent = p2Score
})

reset.addEventListener('click', function(){
  begin();
});

function begin(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('victor');
  p2Display.classList.remove('victor');
  gameOver = false;
}


num.addEventListener('change', function(){
  game.textContent = num.value;
  winningScore = Number(num.value);
  begin();
})