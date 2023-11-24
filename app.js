// morden bottom menu 

// const list = document.querySelectorAll('.list');
// function activelink(){
//     list.forEach((item)=>
//     item.classList.remove('active'));
//     this.classList.add('active');
// }
// list.forEach((item)=>
// item.addEventListener('click', activelink));


// const toggleButton = document.querySelector('.toggle-button');
// const navbar = document.querySelector('.navbar');

// toggleButton.addEventListener('click', () => {
//     navbar.classList.toggle('act');
// });

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



   window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});



