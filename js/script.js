document.addEventListener("DOMContentLoaded", function() {
    // Add a smooth scroll effect to the navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.hash);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  });
  