document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  // Initialize first testimonial
    showTestimonial(currentTestimonial);

    // Handle next button click
    document.querySelector('.next').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Handle previous button click
    document.querySelector('.prev').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
});

  // Animation for stats (numbers incrementing)
  const stats = document.querySelectorAll('#stats .stat-card h3');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.innerText);
        let count = 0;
        const timer = setInterval(() => {
          count++;
          target.innerText = count;
          if (count === countTo) {
            clearInterval(timer);
          }
        }, 20);
        observer.unobserve(target); // Stop observing once the animation is done
      }
    });
  }, observerOptions);

  stats.forEach(stat => {
    statObserver.observe(stat);
  });

  // Animation for solution cards (fade-in on scroll)
  const solutionCards = document.querySelectorAll('.solution-card');
  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add the 'animate' class to trigger the animation
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Observe each solution card for animation
  solutionCards.forEach(card => {
    cardObserver.observe(card);
  });

