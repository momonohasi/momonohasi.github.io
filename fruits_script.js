const hour = 1; // ←ここ変えると時間帯テストできる！

if (hour >= 0 && hour < 6) {
  // 朝
  document.body.style.background =
    "linear-gradient(135deg, #e8ffe3, #d6fff5, #dff4ff)";
} 
else if (hour >= 6 && hour < 12) {
  // 昼
  document.body.style.background =
    "linear-gradient(135deg, #fff4d6, #ffdff0, #e6fff8)";
} 
else if (hour >= 12 && hour < 18) {
  // 夕方
  document.body.style.background =
    "linear-gradient(135deg, #ffe0c9, #ffd6f5, #e7dcff)";
} 
else {
  // 夜
  document.body.style.background =
    "linear-gradient(135deg, #dff4ff, #e4dcff, #f3e1ff)";
}

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
