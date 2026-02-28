const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
  img.onclick = () => {
    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    const bigImg = document.createElement("img");

    bigImg.src = img.src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";
    bigImg.style.borderRadius = "20px";

    overlay.appendChild(bigImg);

    overlay.onclick = () => overlay.remove();

    document.body.appendChild(overlay);
  };
});
