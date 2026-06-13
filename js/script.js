// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // ========== HAMBURGER MENU TOGGLE ==========
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // ========== FAQ ACCORDION (only on faq.html) ==========
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  // ========== CONTACT FORM SUBMISSION (WhatsApp redirect) ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const course = document.getElementById('course')?.value || '';
      const message = document.getElementById('message')?.value || '';

      // Build WhatsApp message
      let waMessage = `Hello LOTPUB, I'm interested in learning coding.%0A`;
      waMessage += `%0A*Name:* ${encodeURIComponent(name)}`;
      waMessage += `%0A*Email:* ${encodeURIComponent(email)}`;
      if (course && course !== '') {
        waMessage += `%0A*Course interested in:* ${encodeURIComponent(course)}`;
      }
      if (message && message !== '') {
        waMessage += `%0A%0A*Message:* ${encodeURIComponent(message)}`;
      }

      // WhatsApp number – replace XXXXXXXXXX with actual number
      const phoneNumber = '2349022829616'; // <-- CHANGE THIS TO YOUR REAL NUMBER
      const waLink = `https://wa.me/${phoneNumber}?text=${waMessage}`;

      // Open WhatsApp in new tab
      window.open(waLink, '_blank');
    });
  }

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const hash = this.getAttribute('href');
      if (hash === '#' || hash === '#') return;
      const target = document.querySelector(hash);
      if (target && this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ========== CLOSE MOBILE MENU AFTER CLICKING A LINK ==========
  const allNavLinks = document.querySelectorAll('.nav-links a');
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });

});