const backgrounds = [
  // 朝
  "linear-gradient(135deg, #dcffe3, #dff7ff, #fff6cc)",

  // 昼
  "linear-gradient(135deg, #fff4d6, #ffdff0, #e6fff8)",

  // 夕方
  "linear-gradient(135deg, #d8c6ff, #fff0a8, #ffcf9f)",

  // 夜
  "linear-gradient(135deg, #d6e8ff, #f3f0ff, #ffe3f1)"
];

const randomBg =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.body.style.background = randomBg;

const cards = document.querySelectorAll(".fruit-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
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
  });
});
