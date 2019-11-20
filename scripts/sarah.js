

/*var $loaderjq = jQuery.noConflict();
$loaderjq(document).ready(function() { 
$(window).on('load', function() {
    // Animate loader off screen
    $("".se-pre-con"").fadeOut(""slow"");;
    });
});

/*SVG
$( document ).ready(function() {
      var count = 0,
    $svg = $('svg').drawsvg({
      duration: 8000,
      stagger: 10000,
      callback: function() {
        animate();
        }
    });

function animate() {
  $svg.drawsvg('animate');  
}

animate();
});

*/

/*Window Inner Height*/

function calcVH() {
  var navbarHeight = '80';
  var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var realvH = vH - navbarHeight;
  document.getElementById("swiper-container-page").setAttribute("style", "height:" + realvH + "px;");
  document.getElementsByClassName("swiper-slide-page")[0].setAttribute("style", "height:" + realvH + "px;");
}calcVH();

function heightListener(){
  window.addEventListener('onorientationchange', calcVH, true);
  window.addEventListener('resize', calcVH, true);
}

/* Menu button */

function toggleHamburgerMenu() {
  var hamburgerMenu = document.getElementById("hamburger-menu");
  hamburgerMenu.classList.toggle("is-active");
}

function closeModal() {
  $('#modalNavigation').modal('hide');
  $('#hamburger-menu').toggleClass("is-active");
}

$(document).ready(function () {

  function SwiperHome() {
    //Slide Home
    var swiperHome = new Swiper('#swiper-container-home', {
      // Autoplay
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      parallax: true,
      preloadImages: false,
      slidesPerView: 1,
      watchSlidesVisibility: true,
      lazy: {
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 1,
        loadOnTransitionStart: false,
      },
    });
    console.log('swiper-home');
  }

  function SwiperSlides(){
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
      
      //document.getElementById("list-group___ocamarote").addEventListener("click", function() {
      //swiperPage.slideTo(4,1000,true);
      //closeModal();
      //});

      document.getElementById("list-group___localizacao").addEventListener("click", function() {
      swiperPage.slideTo(6,1000,true);
      closeModal();
      });

      //document.getElementById("list-group___estrutura").addEventListener("click", function() {
      //swiperPage.slideTo(8,1000,true);
      //closeModal();
      //});

      //document.getElementById("list-group___conceito").addEventListener("click", function() {
      //swiperPage.slideTo(10,1000,true);
      //closeModal();
      //});

      //document.getElementById("list-group___programacao").addEventListener("click", function() {
      //swiperPage.slideTo(11,1000,true);
      //closeModal();
      //});

      //document.getElementById("list-group___desfiles").addEventListener("click", function() {
      //swiperPage.slideTo(13,1000,true);
      //closeModal();
      //});

      //document.getElementById("list-group___gastronomia").addEventListener("click", function() {
      //swiperPage.slideTo(15,1000,true);
      //closeModal();
      //});
      
      //document.getElementById("list-group___openbar").addEventListener("click", function() {
      //swiperPage.slideTo(16,1000,true);
      //closeModal();
      //});

      //document.getElementById("list-group___metting").addEventListener("click", function() {
      //swiperPage.slideTo(17,1000,true);
      //closeModal();
      //});

      //document.getElementById("list-group___comofunciona").addEventListener("click", function() {
      //swiperPage.slideTo(19,1000,true);
      //closeModal();
      //});

      //document.getElementById("list-group___vendas").addEventListener("click", function() {
      //swiperPage.slideTo(21,1000,true);
      //closeModal();
      //});

      document.getElementById("list-group___contato").addEventListener("click", function() {
      swiperPage.slideTo(23,1000,true);
      closeModal();
      });
  }

  function SwiperProgramacao() {
    //Programacao
    var swiperGalleryThumbs = new Swiper('.gallery-thumbs', {
      slidesPerView: 5,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
    });

    var swiperGalleryTop = new Swiper('.gallery-top', {
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      thumbs: {
        swiper: swiperGalleryThumbs
      }
    });
    console.log('swiper-programacao');
  }

  function SwiperEscolaSamba() {
    // Escolas de Samba
    var datasEscolas = new Swiper('.datas-escolas', {
      slidesPerView: 5,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
    });

    var swiperEscolas = new Swiper('.swiper-escolas', {
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      thumbs: {
        swiper: datasEscolas
      },
    });
    console.log('swiper-escolas');
  }

  function SwiperEstrutura() {
    // Estrutura
    var swiperEstrutura = new Swiper('.swiper-estrutura', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('swiper-estrutura');

    // Estrutura

    var swiperFotosEstrutura = new Swiper('.swiper-fotosestrutura', {
      // Optional parameters
      direction: 'horizontal',
      grabCursor: true,
      slidesPerView: 1,
      loop: true,
      effect: 'coverflow',
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('swiper-fotos.estrutura');
  }

  function SwiperGastronomia() {
    // Gastronomia
    var swiperGastronomia2 = new Swiper('.swiper-gastro2', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('swiper-fotos-gastro');
  }

  function SwiperOpenBar() {
    //Marcas

    var openbarMarcas = new Swiper('.openbar-marcas', {
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    var openbarFotos = new Swiper('.openbar-fotos', {
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      thumbs: {
        swiper: openbarMarcas,
      },
    });
    console.log('swiper-openbar');
  }

  function SwiperRealizacao() {
    //Realizacao

    var realizacaoText = new Swiper('.swiper-realizacao-text', {
      slidesPerView: 1,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      effect: 'fade',
    });

    var realizacao = new Swiper('.swiper-realizacao', {
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      thumbs: {
        swiper: realizacaoText,
      },
    });
    console.log('swiper-fotos-realizacao');
  }

  function SmoothScrolling() {
    // Add smooth scrolling to all links
    $('ul.menu-desktop > li > a').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
      }, 800, 'linear');
      //console.log("rolou");
    });
  }

  function LightGallery() {
    $("#lightgallery").lightGallery({
      counter: false,
      share: false,
      autoplay: false,
      autoplayControls: false,
      fullScreen: false,
      actualSize: false,
      download: false,
      controls: false,
    });
    $("#lightgallerycamarote").lightGallery({
      counter: false,
      share: false,
      autoplay: false,
      autoplayControls: false,
      fullScreen: false,
      actualSize: false,
      download: false,
      controls: false,
    });
    $('#lightgallery-descubra').lightGallery({
      selector: '.lightgallery-descubra-picture',
      counter: false,
      share: false,
      autoplay: false,
      autoplayControls: false,
      fullScreen: false,
      actualSize: false,
      download: false,
      controls: false,
    });
  }

  function clonagemDesktop() {
    $("#botao-compra--nav-mobile").clone().appendTo("#botao-compra--nav-desktop");
    $("#legenda-1andar").clone().appendTo("#legenda-1andar--desktop");
    $("#legenda-2andar").clone().appendTo("#legenda-2andar--desktop");
    $("#como-funciona__texto").clone().appendTo("#como-funciona__texto--desktop");
    $(".vendas__wrapper").clone().appendTo("#compre-agora__tabela");
    $(".formcontato").clone().appendTo(".contato__fale");

    function clonagemHome() {
      $("#swiper-wrapper-home-mobile").clone().appendTo("#swiper-container-home--desktop");
      var swiperHomeDesktop = new Swiper('#swiper-container-home--desktop', {
        // Autoplay
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        speed: 3000,
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        parallax: true,
        preloadImages: false,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        slidesPerView: 1,
        watchSlidesVisibility: true,
        lazy: {
          lazyLoadingInPrevNext: true,
          lazyLoadingInPrevNextAmount: 1,
          loadOnTransitionStart: true,
        },
      });
      console.log('swiper-home-desktop');
    } clonagemHome();

  }

  function SwiperGaleriaDesktop() {
    var descubraDesktop = new Swiper('#swiper-container-galeria-desktop', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
    console.log('swiper-galeria-desktop');
  }

  function SwiperEscolaSambaDesktop() {
    var swiperDatasEscolasDesktop = new Swiper('.swiper-datas-escolas--desktop', {
      slidesPerView: 5,
      width: 190,
      resistanceRatio: 0,
      grabCursor: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
    });

    $("#swiper-wrapper-programacao--mobile").clone().appendTo("#swiper-container-programacao--desktop");
    var swiperProgramacaoDesktop = new Swiper('#swiper-container-programacao--desktop', {
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      lazy: true,
      grabCursor: true,
      thumbs: {
        swiper: swiperDatasEscolasDesktop
      }
    });

    $("#swiper-wrapper-desfiles--mobile").clone().appendTo("#swiper-container-desfiles--desktop");
    var swiperDesfilesDesktop = new Swiper('#swiper-container-desfiles--desktop', {
      loop: true,
      slidesPerView: 1,
      lazy: true,
      grabCursor: true,
    });

    swiperProgramacaoDesktop.controller.control = swiperDesfilesDesktop;
    swiperDesfilesDesktop.controller.control = swiperProgramacaoDesktop;
    console.log('swiper-datas-e-escolas');
  }

  function CompreDesktop() {
    var swiperCompreAgoraDesktop = new Swiper('#swiper-container-compre-agora--desktop', {
      autoplay: {
        delay: 1000,
      },
      slidesPerView: 1,
      speed: 3000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      }
    });
    console.log('compre-agora');
  }


  function ScrollMagicEffects() {

    var controller = new ScrollMagic.Controller();

    var tweenAndar1 = TweenMax.fromTo("#scroll-andar1", 1, { right: -595, autoAlpha: 0 }, { right: 0, autoAlpha: 1 });
    var sceneAndar1 = new ScrollMagic.Scene({
      triggerElement: "#scroll-andar1",
    })
      .setTween(tweenAndar1)
      .addTo(controller);

    var tweenAndar2 = TweenMax.fromTo("#scroll-andar2", 1, { right: -595, autoAlpha: 0 }, { right: 0, autoAlpha: 1 });
    var sceneAndar2 = new ScrollMagic.Scene({
      triggerElement: "#scroll-andar2",
    })
      .setTween(tweenAndar2)
      .addTo(controller);

    var tweenPrato = TweenMax.fromTo("#scroll-prato", 1, { left: -138, autoAlpha: 0 }, { left: 0, autoAlpha: 1 });
    var scenePrato = new ScrollMagic.Scene({
      triggerElement: "#scroll-prato",
    })
      .setTween(tweenPrato)
      .addTo(controller);


    $('.subtitulo--desktop').each(function () {

      var tweenSubtitulo = TweenMax.fromTo(this, .7, { autoAlpha: 0, bottom: -30 }, { autoAlpha: 1, bottom: 0 });

      var sceneSubtitulo = new ScrollMagic.Scene({
        triggerElement: this,
      })
        .setTween(tweenSubtitulo)
        .addTo(controller);
    });

    $('.scroll-subtitulo').each(function () {

      var parent2 = $(this).closest('div').find('h2');
      var tween1 = TweenMax.fromTo(this, .7, { autoAlpha: 0, top: -30 }, { autoAlpha: 1, top: 0 });
      var scene1 = new ScrollMagic.Scene({
        triggerElement: parent2
      })
        .setTween(tween1)
        .addTo(controller);

    });

    $('.scroll-fade').each(function () {

      var parent = $(this).siblings('h2');
      var tween2 = TweenMax.fromTo(this, 1.2, { autoAlpha: 0, ease: Power0.easeNone }, { autoAlpha: 1 });
      var scene2 = new ScrollMagic.Scene({
        triggerElement: parent
      })
        .setTween(tween2)
        .addTo(controller);

    });

    $('#fale-conosco_').each(function () {

      var tweenFaleconosco = TweenMax.fromTo(this, .7, { autoAlpha: 0, top: -30 }, { autoAlpha: 1, top: 0 });
      var sceneFaleconosco = new ScrollMagic.Scene({
        triggerElement: this,
        offset: 150
      })
        .setTween(tweenFaleconosco)
        .addTo(controller);
    });

  }

  //function reinitSwiper(swiper) {
    //setTimeout(function() {
      //swiper.update();
    //}, 9000);
  //};

  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });

  heightListener();
  SwiperSlides();
  SwiperHome();
  //SwiperProgramacao();
  //SwiperEscolaSamba();
  SwiperEstrutura();
  //SwiperGastronomia();
  //SwiperOpenBar();
  //SwiperRealizacao();
  SmoothScrolling();
  ScrollMagicEffects();
  LightGallery();

  // Desktop
  clonagemDesktop();
  SwiperGaleriaDesktop();
  //SwiperEscolaSambaDesktop();
  //swiperCompreAgoraDesktop();
  //reinitSwiper();

  if (myLazyLoad) {
    myLazyLoad.update();
}

});
