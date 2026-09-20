// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = '#07090e';
    navLinks.style.padding = '25px';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    navLinks.style.gap = '20px';
  }
});

// Accordion Toggle (Closed by default)
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.accordion-item').forEach(acc => {
      acc.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Certifications Dropdown Toggle
const toggleCertsBtn = document.getElementById('toggleCertsBtn');
const detailedCertsDropdown = document.getElementById('detailedCertsDropdown');

if (toggleCertsBtn && detailedCertsDropdown) {
  toggleCertsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    detailedCertsDropdown.classList.toggle('show');
    
    if (detailedCertsDropdown.classList.contains('show')) {
      toggleCertsBtn.innerHTML = 'Hide credentials &laquo;';
      detailedCertsDropdown.scrollIntoView({ behavior: 'smooth' });
    } else {
      toggleCertsBtn.innerHTML = 'View all credentials &raquo;';
    }
  });
}

// Dynamic Matrix Code Animation Effect
const matrixCode = document.getElementById('matrixCode');
if (matrixCode) {
  const codeLines = [
    "&gt;, ICX:- [7_BW!M&lt;ME;=[9BC{G!CT,SZ&amp;QQSF&amp;P)&lt;B0:[]X},C7+3/",
    ":K!P_BLZSC$)}&lt;JRM7PN5GIS#NYM!]5W]5&lt;EZ+9[/IT)6/#9LXH2#",
    "B_V@B(5G&lt;E2W$WUXW[Z&amp;NR3KMNWJT}}(D)BPR}I07&amp;3L04;E[,WW",
    "&lt;[U@J9H$LU9T,}YLLX)+;3] -==)&amp;A:Z{RQK9A08S=V0G}I&gt;FHDM14",
    "[;M[NA-:P/XYU&amp;AH&lt;HZ7Z4FC&amp;PMT!8&lt;-*)}0Y&gt;,08MSRM#KTS80",
    "1I[KAS]_YXN6JTXNSL7J9XBWK[]&amp;U716 LHL=WAS{P}RT$-V75"
  ];
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}<>/-~";
  
  setInterval(() => {
    let randomLineIndex = Math.floor(Math.random() * codeLines.length);
    let lineToAlter = codeLines[randomLineIndex];
    
    let charArr = lineToAlter.split('');
    for(let i = 0; i < 3; i++) {
      let randPos = Math.floor(Math.random() * charArr.length);
      charArr[randPos] = chars[Math.floor(Math.random() * chars.length)];
    }
    codeLines[randomLineIndex] = charArr.join('');
    
    matrixCode.innerHTML = codeLines.join('<br>');
  }, 150);
}
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
