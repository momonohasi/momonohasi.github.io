const backgrounds = [
  "linear-gradient(135deg, #dcffe3, #dff7ff, #fff6cc)",
  "linear-gradient(135deg, #fff4d6, #ffdff0, #e6fff8)",
  "linear-gradient(135deg, #d8c6ff, #fff0a8, #ffcf9f)",
  "linear-gradient(135deg, #d6e8ff, #f3f0ff, #ffe3f1)"
];

const randomBg =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.background = randomBg;

const cards = document.querySelectorAll(".fruit-card");

const startBtn = document.getElementById("start-btn");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");

let gameMode = false;
let score = 0;
let timeLeft = 15;

let spawnInterval;
let timerInterval;

function popFruit(card) {
  const emoji = card.dataset.emoji;
  const count = Math.floor(Math.random() * 9) + 8;

  for (let i = 0; i < count; i++) {
    const pop = document.createElement("span");

    pop.className = "pop";
    pop.textContent = emoji;

    const startX = Math.random() * 60 - 30;
    const startY = Math.random() * 60 - 30;

    const dx = Math.random() * 220 - 110;
    const dy = Math.random() * 220 - 110;

    const rot = Math.random() * 720 - 360;

    pop.style.left = `calc(50% + ${startX}px)`;
    pop.style.top = `calc(50% + ${startY}px)`;

    pop.style.setProperty("--dx", `${dx}px`);
    pop.style.setProperty("--dy", `${dy}px`);
    pop.style.setProperty("--rot", `${rot}deg`);

    card.appendChild(pop);

    setTimeout(() => {
      pop.remove();
    }, 900);
  }
}

cards.forEach((card) => {

  function normalModePop() {
    if (!gameMode) {
      popFruit(card);
    }
  }

  card.addEventListener("mouseenter", normalModePop);
  card.addEventListener("touchstart", normalModePop);

});

function spawnGameFruit() {

  const randomCard =
    cards[Math.floor(Math.random() * cards.length)];

  const emoji = randomCard.dataset.emoji;

  const fruit = document.createElement("div");

  fruit.className = "game-fruit";
  fruit.textContent = emoji;

  fruit.style.left =
    randomCard.offsetLeft +
    randomCard.offsetWidth / 2 -
    16 + "px";

  fruit.style.top =
    randomCard.offsetTop +
    randomCard.offsetHeight / 2 -
    16 + "px";

  function hitFruit() {

    score++;

    scoreText.textContent =
      `SCORE : ${score}`;

    popFruit(randomCard);

    fruit.remove();
  }

  fruit.addEventListener("click", hitFruit);
  fruit.addEventListener("touchstart", hitFruit);

  document.body.appendChild(fruit);

  setTimeout(() => {
    fruit.remove();
  }, 2000);
}

startBtn.addEventListener("click", () => {

  if (gameMode) return;

  gameMode = true;

  score = 0;
  timeLeft = 15;

  scoreText.textContent = "SCORE : 0";
  timerText.textContent = "TIME : 15";

  spawnInterval =
    setInterval(spawnGameFruit, 450);

  timerInterval =
    setInterval(() => {

      timeLeft--;

      timerText.textContent =
        `TIME : ${timeLeft}`;

      if (timeLeft <= 0) {

        clearInterval(spawnInterval);
        clearInterval(timerInterval);

        gameMode = false;

        timerText.textContent = "TIME UP!";

        alert(`TIME UP!\nSCORE : ${score}`);
      }

    }, 1000);

});