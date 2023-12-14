
//toggle control
const navbar = document.querySelector('.navbar');
document.querySelector('.toggle-button').addEventListener('click', function() {
    this.classList.toggle('change');
    navbar.classList.toggle('act');
   });
document.getElementById('h').addEventListener('click', function() {
    document.querySelector('.toggle-button').classList.toggle('change');
    navbar.classList.toggle('act');
   });
document.getElementById('m').addEventListener('click', function() {
    document.querySelector('.toggle-button').classList.toggle('change');
    navbar.classList.toggle('act');
   });
   

const contact = document.querySelector('.pop');
document.querySelector('.cross').addEventListener('click', function() {
    contact.classList.toggle('close');
})
document.querySelector('.submit-btn').addEventListener('click', function() {
    contact.classList.toggle('close');
})
document.querySelector('.contact').addEventListener('click', function() {
    contact.classList.toggle('close');
})


//animate on scroll
   window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);



  //swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});



