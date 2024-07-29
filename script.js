document.getElementById("mobile-right").addEventListener("click", function () {
  const mobileMenu = document.querySelector(".mobile-middle");
  mobileMenu.classList.toggle("show");
});

const dialog = document.getElementById("login");
function show() {
  dialog.showModal();
}

document.getElementById("contact").addEventListener("click", function () {
  show();
});
document.getElementById("close").addEventListener("click", function () {
  dialog.close();
});

document.getElementById("contact-mob").addEventListener("click", function () {
  show();
});
document.getElementById("close").addEventListener("click", function () {
  dialog.close();
});
function validateForm() {
  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("genderError").textContent = "";

  let isValid = true;

  // Validate name
  const name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Validate phone number
  const phone = document.getElementById("phone").value;
  const phonePattern = /^[0-9]{10}$/;
  if (phone === "") {
    document.getElementById("phoneError").textContent =
      "Phone number is required.";
    isValid = false;
  } else if (!phone.match(phonePattern)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits.";
    isValid = false;
  }

  // Validate gender
  const gender = document.getElementById("gender").value;
  if (gender === "") {
    document.getElementById("genderError").textContent = "Gender is required.";
    isValid = false;
  }

  return isValid;
}

let change = document.getElementById("lang");
let lang = document.querySelector(".langchange");
lang.innerHTML = "My name is Vishal Kumar Shakya.I am a Web Developer";

change.addEventListener("click", function () {
  if (
    lang.innerHTML === "My name is Vishal Kumar Shakya.I am a Web Developer"
  ) {
    changetohindi();
  } else {
    changetoenglish();
  }
});
function changetohindi() {
  lang.innerHTML = "मेरा नाम विशाल कुमार शाक्य है। मैं एक वेब डेवलपर हूं";
}
function changetoenglish() {
  lang.innerHTML = "My name is Vishal Kumar Shakya.I am a Web Developer";
}
