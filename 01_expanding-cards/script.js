const panels = document.querySelectorAll(".panel");
console.log(panels);
console.log(panels[0]);

panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener("click", () => {
    // console.log("This panel was clicked.");
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
