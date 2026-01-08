// Hamburger menu ka code
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// Contact Form ka code
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Ye line sabse zaruri hai taake page reload na ho

  let valid = true;

  // Pehle saare error messages aur success message ko saaf (clear) karein
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("formMessage").innerText = "";

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email Validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  }

  // Message Validation
  const message = document.getElementById("message").value.trim();
  if (message.length < 10) {
    document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
    valid = false;
  }

  // Agar saare fields sahi hain to success message dikhao
  if (valid) {
    const formMessage = document.getElementById("formMessage");
    formMessage.innerText = "Shukriya! Aapka message bhej diya gaya hai.";
    formMessage.style.color = "green";

    // Form ko reset karein
    document.getElementById("contactForm").reset();

    // 5 seconds ke baad message hata dein
    setTimeout(() => {
      formMessage.innerText = "";
    }, 5000);
  }
});