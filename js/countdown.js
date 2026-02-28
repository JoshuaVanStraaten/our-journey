setInterval(() => {
  const start = new Date(CONFIG.relationshipStart);
  const now = new Date();

  const diff = now - start;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("counter").innerText = days + " days together";
}, 1000);
