



// =====CHANGE BACKGROUND HEADER ======



const scrollHeader = () =>{ 
    const header = document.getElementById('header')

    if(this.scrollY >= 50){ //scrollY is scroll pababa
        header.classList.add('scroll-header') // mag babago ng css
    
     
    } else {
        header.classList.remove('scroll-header') // ireremove yung css once natapos yung command
    }
}

window.addEventListener('scroll', scrollHeader); //sa baba palagin mag initialize ng function name


// SWIPER PRODUCTS
    // change swiper with swiperProducts
let swiperProducts = new Swiper(".product-container", { // change ".mySwiper" to container name "product-container"
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerview: 'auto',
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


