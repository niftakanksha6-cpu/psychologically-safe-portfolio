const title = document.querySelector(".title");

title.addEventListener("mouseenter", () => {
  title.style.transform = "translateY(-4px)";
});

title.addEventListener("mouseleave", () => {
  title.style.transform = "translateY(0)";
});
