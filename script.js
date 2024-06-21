// Toggle btn
// script.js
document.querySelectorAll('.category .toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const icon = this.querySelector('i');
      icon.classList.toggle('bx-toggle-left');
      icon.classList.toggle('bx-toggle-right');
    });
  });
  
  