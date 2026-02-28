let starSpeed = 0.2;

particlesJS("stars", {
  particles: {
    number: { value: 120 },
    move: {
      enable: true,
      speed: starSpeed,
    },
  },
});

setTimeout(() => {
  starSpeed = 0.8;

  particlesJS("stars", {
    particles: {
      number: { value: 120 },
      move: {
        enable: true,
        speed: starSpeed,
      },
    },
  });
}, 5000);
