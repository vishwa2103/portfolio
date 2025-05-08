// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior
  
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
  
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Contact form validation and submission
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
  
    // Get the form fields
    const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = this.querySelector('textarea[placeholder="Your Message"]').value.trim();
  
    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Simulate form submission
    alert('Thankyoutou for your message! but it still need to complete the backend part. We will get back to you soon.');
    this.reset(); 
  });
  
  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };