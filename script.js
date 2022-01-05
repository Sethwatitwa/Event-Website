let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
    themeToggler.classList.toggle('active')
}
window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
    btn.onclick = () =>{
        let color =btn.getElementsByClassName.background;
        document.querySelector(':root').getElementsByClassName.setProperty('--main-color');

    }
});
var swiper = new swiper(".home-slider",{
    effect:"coverflow",
    grabCursor:true,
    centerdSlides:true,
    slidesPerView:"auto",

    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadows:true,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disabledOnInteraction:false,
    }

});
var swiper = new swiper(".review-slider",{
    slidesPerView: 1,
    grabCursor:true,
    loop:true,
    spaceBetween:10,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3,
        },

    },
    autoplay:{
        delay:5000,
        disabledOnInteraction:false,
    }
});