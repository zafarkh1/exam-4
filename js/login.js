const form = document.getElementById("form");
const email = document.getElementById("username");
const password = document.getElementById("password");
const validateEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "f-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "f-control success";
}

function isEmail(email) {
  return validateEmail.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(email, "used inappropriate symbol");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setError(password, "password cannot be empty");
  } else {
    setSuccessFor(password);
  }
}