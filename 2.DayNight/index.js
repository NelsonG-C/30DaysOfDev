const switchBox = document.querySelector(".sun-moon");
const theme = document.querySelector(".theme");

document.querySelector("input").addEventListener("change", (e) => {
  const { checked } = e.target;
  if (checked) {
    switchBox.classList.add("move");
    theme.style.backgroundColor = "#0f3460";
  } else {
    switchBox.classList.remove("move");
    theme.style.backgroundColor = "white";
  }
});
