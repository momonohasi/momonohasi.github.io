const cards = document.querySelectorAll(".fruit-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const emoji = card.dataset.emoji;
    const count = Math.floor(Math.random() * 9) + 8; // 8〜16個

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