// Minimal example: Alert on social icon click
document.addEventListener('DOMContentLoaded', function() {
  const socialLinks = document.querySelectorAll('.social-icon-link');
  socialLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // DEMO only: replace with your real URLs
      if(link.getAttribute('href') === "#") {
        e.preventDefault();
        alert('Coming soon: Social media integration!');
      }
    });
  });

  // Contact form AJAX submission (for FastAPI backend)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.onsubmit = async function(e) {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const res = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        body: data
      });
      const result = await res.json();
      document.getElementById('contactResponse').textContent = result.response;
    };
  }
  // Add more JS as needed for form validation, modals, nav, etc.
});