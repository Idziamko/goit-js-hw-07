// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Select the button, the span for the color value, and the body element
const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

// 2. Add a click event listener to the button
changeColorBtn.addEventListener("click", () => {
  // 3. Generate a random color
  const randomColor = getRandomHexColor();

  // 4. Apply the color to the body background
  body.style.backgroundColor = randomColor;

  // 5. Display the color value in the span
  colorSpan.textContent = randomColor;
});
