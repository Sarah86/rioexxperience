var swiperPage = new Swiper ('#swiper-container-page', {
    direction: 'vertical',
    mousewheel: true,
    keyboard: true,
    grabCursor: true,
    preloadImages: false,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    lazy:{
         lazyLoadingInPrevNext: true,
         lazyLoadingInPrevNextAmount: 1,
         loadOnTransitionStart: false,
     },
     scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
       },
   });
    document.getElementById("list-group___home").addEventListener("click", function() {
    swiperPage.slideTo(0,1000,true);
    closeModal();
    });
    document.getElementById("list-group___aftermovie").addEventListener("click", function() {
    swiperPage.slideTo(1,1000,true);
    closeModal();
    });
    document.getElementById("list-group___ocamarote").addEventListener("click", function() {
    swiperPage.slideTo(4,1000,true);
    closeModal();
    });

    document.getElementById("list-group___localizacao").addEventListener("click", function() {
    swiperPage.slideTo(6,1000,true);
    closeModal();
    });

    document.getElementById("list-group___estrutura").addEventListener("click", function() {
    swiperPage.slideTo(8,1000,true);
    closeModal();
    });

    document.getElementById("list-group___conceito").addEventListener("click", function() {
    swiperPage.slideTo(10,1000,true);
    closeModal();
    });

    document.getElementById("list-group___programacao").addEventListener("click", function() {
    swiperPage.slideTo(11,1000,true);
    closeModal();
    });

    document.getElementById("list-group___desfiles").addEventListener("click", function() {
    swiperPage.slideTo(13,1000,true);
    closeModal();
    });

    document.getElementById("list-group___gastronomia").addEventListener("click", function() {
    swiperPage.slideTo(15,1000,true);
    closeModal();
    });
    document.getElementById("list-group___openbar").addEventListener("click", function() {
    swiperPage.slideTo(16,1000,true);
    closeModal();
    });

    document.getElementById("list-group___metting").addEventListener("click", function() {
    swiperPage.slideTo(17,1000,true);
    closeModal();
    });

    document.getElementById("list-group___comofunciona").addEventListener("click", function() {
    swiperPage.slideTo(19,1000,true);
    closeModal();
    });

    document.getElementById("list-group___vendas").addEventListener("click", function() {
    swiperPage.slideTo(21,1000,true);
    closeModal();
    });

    document.getElementById("list-group___contato").addEventListener("click", function() {
    swiperPage.slideTo(23,1000,true);
    closeModal();
    });