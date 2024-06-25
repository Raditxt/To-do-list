const wrapper = document.querySelector(".wrapper");
const menubtn = document.querySelector(".menu-button");

const togglescreen = () => {
    wrapper.classList.toggle("active");
}

menubtn.addEventListener("click", togglescreen);

// Toggle btn
document.querySelectorAll('.toggle-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    const icon = this.querySelector('i');
    if (this.classList.contains('active')) {
      icon.classList.remove('bx-check-square');
      icon.classList.add('bx-checkbox-checked');
    } else {
      icon.classList.remove('bx-checkbox-checked');
      icon.classList.add('bx-check-square');
    }
  });
});


  
  