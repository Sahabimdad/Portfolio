// Hamburger menu toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Page reload rokne ke liye

    let valid = true;

    // Clear error messages
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

    // Agar saare fields valid hain
    if (valid) {
      const formMessage = document.getElementById("formMessage");
      formMessage.innerText = "Shukriya! Aapka message bhej diya gaya hai.";
      formMessage.style.color = "#00adb5";

      // Form reset
      contactForm.reset();

      // 5 seconds baad message remove kar dein
      setTimeout(() => {
        formMessage.innerText = "";
      }, 5000);
    }
  });
}
