// ===== Professional Script.js =====

// Mobile Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking any nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}

// Contact Form Validation & Submission Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Agar aap PHP backend ke zariye mail bhej rahe hain toh default submit chalne dein,
    // ya agar AJAX validation karni hai toh neeche ka logic use hoga:
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Simple basic checks
    if (name === '') {
      document.getElementById('nameError').innerText = 'Please enter your name.';
      isValid = false;
    } else {
      document.getElementById('nameError').innerText = '';
    }
    
    if (email === '' || !email.includes('@')) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address.';
      isValid = false;
    } else {
      document.getElementById('emailError').innerText = '';
    }
    
    if (message === '') {
      document.getElementById('messageError').innerText = 'Please write a message.';
      isValid = false;
    } else {
      document.getElementById('messageError').innerText = '';
    }
    
    if (!isValid) {
      e.preventDefault(); // Form submit hone se rok dega agar errors hon
    }
  });
}
