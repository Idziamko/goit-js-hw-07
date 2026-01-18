// 1. Select the input and the output span elements
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// 2. Add an event listener for the 'input' event
nameInput.addEventListener("input", (event) => {
  // 3. Get the current value and trim whitespace from the edges
  const inputValue = event.currentTarget.value.trim();

  // 4. Update the text content of the span
  // If the input is empty, display "Anonymous", otherwise display the value
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
