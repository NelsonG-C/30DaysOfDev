const switchBox = document.querySelector(".sun-moon");
const theme = document.querySelector(".theme");

document.querySelector("input").addEventListener("change", (e) => {
  const { checked } = e.target;
  if (checked) {
    switchBox.classList.add("move");
    document.body.classList.add("darktheme");
  } else {
    switchBox.classList.remove("move");
    document.body.classList.remove("darktheme");
  }
});
