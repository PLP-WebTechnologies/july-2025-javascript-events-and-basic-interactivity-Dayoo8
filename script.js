let body = document.getElementById("body");
window.onload = function(){
    body.style.backgroundcolour = "pink";
}


// Part 1: Event Handling

const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});


// Part 2: Interactive Elements
// 

// Light/Dark Mode
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// Part 3: Form Validation

const form = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Basic validation rules
  if (name.length < 2) {
    formMessage.textContent = " Name must be at least 2 characters.";
    formMessage.className = "error";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = " Please enter a valid email address.";
    formMessage.className = "error";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = " Password must be at least 6 characters.";
    formMessage.className = "error";
    return;
  }

  // If everything is valid
  formMessage.textContent = " Registration successful!";
  formMessage.className = "success";
});
