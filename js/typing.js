function startTyping() {
  new Typed("#typed", {
    strings: CONFIG.typingText,
    typeSpeed: 50,
    backSpeed: 0,
    showCursor: false,
  });
}
