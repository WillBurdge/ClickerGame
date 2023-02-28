let score = 0;
let timeLeft = 10;
let timerId = null;
let gameEnded = false;

const btn = document.getElementById('btn');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

btn.addEventListener('click', function() {
  if (!gameEnded) {
    score++;
    scoreEl.innerText = `Score: ${score}`;
  }
});

timerId = setInterval(function() {
  timeLeft--;
  timerEl.innerText = `Time remaining: ${timeLeft} seconds`;

  if (timeLeft === 0) {
    clearInterval(timerId);
    btn.disabled = true;
    gameEnded = true;
    const audio = new Audio('game-over.mp3');
    audio.play();
    alert(`Game over! Your score is ${score}`);
    showGameOver();
  }
}, 1000);

function showGameOver() {
  const div = document.createElement('div');
  div.classList.add('game-over');

  const h1 = document.createElement('h1');
  h1.innerText = 'Game Over';

  const p = document.createElement('p');
  p.innerText = `Your score is ${score}`;

  const btn = document.createElement('button');
  btn.innerText = 'Play again';
  btn.addEventListener('click', function() {
    location.reload();
  });

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(btn);
  document.body.appendChild(div);
}
