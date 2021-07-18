const rgb = ["rgb(200, 220, 90)", "rgb(23, 20, 200)", "rgb(233, 220, 190)", "rgb(233, 220, 240)", "rgb(90, 220, 115)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = rgb[randomNumber];
  color.textContent = rgb[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * rgb.length);
}
