document.addEventListener('DOMContentLoaded', function() {
  // ===== MOBILE MENU TOGGLE =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('show');
      body.classList.toggle('menu-open');
    });

    // Close menu when clicking any nav link
    const allLinks = document.querySelectorAll('.nav-links a');
    allLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        body.classList.remove('menu-open');
      }
    });
  }

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', (e) => {
        e.stopPropagation();
        // Optional: close others
        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('active')) {
            other.classList.remove('active');
          }
        });
        item.classList.toggle('active');
      });
    }
  });

  // ===== CONTACT FORM SUBMISSION (WhatsApp) =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const course = document.getElementById('course')?.value || '';
      const message = document.getElementById('message')?.value || '';

      let waMessage = `Hello LOTPUB, I'm interested in learning coding.%0A`;
      waMessage += `%0A*Name:* ${encodeURIComponent(name)}`;
      waMessage += `%0A*Email:* ${encodeURIComponent(email)}`;
      if (course && course !== '') waMessage += `%0A*Course interested in:* ${encodeURIComponent(course)}`;
      if (message && message !== '') waMessage += `%0A%0A*Message:* ${encodeURIComponent(message)}`;

      const phoneNumber = '234XXXXXXXXXX'; // Replace with your WhatsApp number
      window.open(`https://wa.me/${phoneNumber}?text=${waMessage}`, '_blank');
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS (if any) =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const hash = this.getAttribute('href');
      if (hash === '#' || hash === '#') return;
      const target = document.querySelector(hash);
      if (target && hash.startsWith('#')) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
