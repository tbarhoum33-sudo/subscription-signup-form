
const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const terms = document.getElementById("terms").checked;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  message.className = "";

  if (name.length < 2) {
    message.textContent = "Please enter a valid name.";
    message.className = "error";
    return;
  }

  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email.";
    message.className = "error";
    return;
  }

  if (!terms) {
    message.textContent = "Please accept the terms.";
    message.className = "error";
    return;
  }

  message.textContent =
    `Thank you, ${name}! Subscription demo completed.`;
  message.className = "success";

  form.reset();
});
