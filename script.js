document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("hCRcpIM-to2QfwV5U");
});

const hamburg = document.querySelector('.hamburg');
const cancel = document.querySelector('.cancel');
const dropdown = document.querySelector('.dropdown');
const menuLinks = document.querySelectorAll('.dropdown .links a'); 
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_5mdzxlp', 'template_nzlns1s', '#contact-form', 'hCRcpIM-to2QfwV5U')
      .then(() => {
          contactMessage.textContent = 'Message sent successfully ✅';
          setTimeout(() => { contactMessage.textContent = ''; }, 5000);
          contactForm.reset();
      })
      .catch((error) => {
          console.error("Error sending email:", error);
          contactMessage.textContent = 'Failed to send message ❌';
      });
};

contactForm.addEventListener('submit', sendEmail);

// Dropdown menu functionality
hamburg.addEventListener('click', () => {
  dropdown.style.transform = 'translateY(0)';
  hamburg.style.display = 'none';
  cancel.style.display = 'block';
});

cancel.addEventListener('click', () => {
  dropdown.style.transform = 'translateY(-500px)';
  cancel.style.display = 'none';
  hamburg.style.display = 'block';
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
      closeDropdown();
  });
});

function closeDropdown() {
  dropdown.style.transform = 'translateY(-500px)';
  cancel.style.display = 'none';
  hamburg.style.display = 'block';
}

window.addEventListener("load", () => {
  setTimeout(() => {
      document.querySelector(".overlay").style.display = "none";
  }, 2500);
});

window.onscroll = function () {
  let btn = document.getElementById("scrollUpBtn");
  if (document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};