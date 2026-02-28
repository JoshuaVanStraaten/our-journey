function createDahlia() {
  const dahlia = document.createElement("div");

  dahlia.innerHTML = "🌸";

  dahlia.className = "dahlia";

  dahlia.style.left = Math.random() * 100 + "vw";

  dahlia.style.animationDuration = 10 + Math.random() * 20 + "s";

  document.body.appendChild(dahlia);

  setTimeout(() => {
    dahlia.remove();
  }, 30000);
}

setInterval(createDahlia, 3000);
