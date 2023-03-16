const form = document.querySelector(".form");
const feedback = document.querySelector(".feedback");

const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");

const showFeedback = (username, email) => {
  feedback.textContent = `Hello ${username}, your email is ${email}`;
};

const hideForm = () => {
  form.remove();
};

const handleSubmit = (event) => {
  event.preventDefault();

  const username = usernameField.value;
  const email = emailField.value;
  hideForm();
  showFeedback(username, email);

  form.reset();
};

form.addEventListener("submit", handleSubmit);
