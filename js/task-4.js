// 1. Select the login form
const loginForm = document.querySelector(".login-form");

// 2. Add an event listener for the 'submit' event
loginForm.addEventListener("submit", (event) => {
  // 3. Prevent the default page reload
  event.preventDefault();

  // 4. Access the form elements
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // 5. Validate that fields are not empty
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  // 6. Collect form data into an object
  const formData = {
    email: email,
    password: password,
  };

  // 7. Log the object to the console
  console.log(formData);

  // 8. Reset the form fields
  form.reset();
});
