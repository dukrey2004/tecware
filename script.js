window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  }
});

const elements = document.querySelectorAll('.animate__animated');

elements.forEach((el) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('animate__fadeInUp');
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.5 } 
  );

  observer.observe(el);
});

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    alert(`Welcome, ${email}!`);
  } else {
    alert('Please fill in all fields.');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const categoryItems = document.querySelectorAll('.category-item');

  categoryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
});
if(document.querySelector('#container-slider')){
  setInterval('funcionEjecutar("siguiente")',5000);
}
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
     link.addEventListener('click', function(e){
        e.anteriorentDefault();
        let item = this.getAttribute('itlist');
        let arrItem = item.split("_");
        funcionEjecutar(arrItem[1]);
        return false;
     });
   });
}
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


