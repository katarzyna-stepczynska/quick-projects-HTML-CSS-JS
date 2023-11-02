const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length; // max 4, not go to five if currentActive++
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1; // min 1, not under into 0 if currentActive--
  }
  update();
});

const update = () => {
  circles.forEach((circle, id) => {
    if (id < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  console.log((actives.length / circles.length) * 100); // convert to percentage
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%"; // progress bar to fill with width in percentage, we want to 33%, 66%, not 50%, 75%
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
