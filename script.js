const wrapper = document.querySelector(".wrapper");
const menubtn = document.querySelector(".menu-button");

const togglescreen = () => {
    wrapper.classList.toggle("active");
}

menubtn.addEventListener("click", togglescreen);

// Toggle btn
document.querySelectorAll('.category .toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const icon = this.querySelector('i');
      icon.classList.toggle('bx-toggle-left');
      icon.classList.toggle('bx-toggle-right');
    });
  });
  
  