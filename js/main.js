document.getElementById("enterBtn").onclick = () => {
  // Play music safely (works on mobile after user tap)
  const music = document.getElementById("music");

  if (music) {
    music.play().catch((err) => {
      console.log("Music autoplay prevented:", err);
    });
  }

  // Hide intro
  document.getElementById("intro").style.display = "none";

  // Start typing animation
  showSection("typingSection");
  startTyping();

  // Reveal sections progressively
  setTimeout(() => showSection("counterSection"), 4000);
  setTimeout(() => showSection("messageSection"), 6000);
  setTimeout(() => showSection("timelineSection"), 8000);
  setTimeout(() => showSection("gallerySection"), 10000);
  setTimeout(() => showSection("versesSection"), 12000);
  setTimeout(() => showSection("finalSection"), 14000);
};

// Utility function to show hidden sections
function showSection(id) {
  const el = document.getElementById(id);

  el.classList.remove("hidden");

  setTimeout(() => {
    el.classList.add("visible");
  }, 100);
}

// Render timeline dynamically
const timelineContainer = document.getElementById("timeline");

TIMELINE.forEach((item) => {
  const div = document.createElement("div");

  div.className = "timeline-item";

  div.innerHTML = `
    <h3>${item.date}</h3>
    <p>${item.text}</p>
  `;

  timelineContainer.appendChild(div);
});

// Render verses dynamically
const versesContainer = document.getElementById("verses");

VERSES.forEach((v) => {
  const div = document.createElement("div");

  div.className = "card";

  div.innerHTML = `
    <p>"${v.text}"</p>
    <small>${v.ref}</small>
  `;

  versesContainer.appendChild(div);
});
