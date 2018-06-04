(function($) {
    "use strict";

    // Go to top.
    var $scroll_obj = $( '#btn-gotop' );

    $(window).on('scroll', function() {
      if ( $( this ).scrollTop() > 100 ) {
        $scroll_obj.fadeIn();
      } else {
        $scroll_obj.fadeOut();
      }
    });

    $('.js--scroll-to-features').click(function(){
      $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 600);
    });

    $scroll_obj.on('click', function(e){
      $( 'html, body' ).animate( { scrollTop: 0 }, 600 );
      return false;
    });

    // Mean Menu
    $('.main-navigation').meanmenu({
      meanMenuContainer: '.site-header',
      meanScreenWidth:"991",
      onePage: true
    });

    // Portfolio filter
    $('#portfolio').mixitup({
      targetSelector: '.portfolio-item',
      transitionSpeed: 450
    });

    //for gallery of home page
    $('#portfolio').lightGallery();

    //counters
    $('.count').counterUp({
      delay: 10,
      time: 4000
    });

  //main slider
  $('.slick-main-slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    arrows:true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows : false
        }
      }
    ]
  });

  //Home Page Testimonial
  $('.testimonial-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    fade: true,
    arrows:false,
    autoplay: true     
  });

  // clients-slider
  $('.clients-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    arrows:false,
    slidesToScroll: 2,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  });


  /*For fixing the top menu*/ 
  var aboveHeight = $('.site-header').outerHeight();
  
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > aboveHeight){
      $("#logo_image").attr("src", "css/logo for other screens png.png");
      $('body').addClass('fixed-header-on');

    } else {

      $('body').removeClass('fixed-header-on');
      $("#logo_image").attr("src", "css/css/logo for home screen.png");
    }

  });

  // Smooth scroll
  var sections = $('section')
    , nav = $('.main-navigation')
    , nav_height = $('.site-header').innerHeight();
   
  $(window).on('scroll', function () {

    var cur_pos = $(this).scrollTop();
   
    sections.each(function() {

      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
   
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('#primary-menu li a').parent().removeClass('current-menu-item ');
        sections.parent().removeClass('current-menu-item');
   
        $(this).parent().addClass('current-menu-item');
        nav.find('#primary-menu li a[href="#'+$(this).attr('id')+'"]').parent().addClass('current-menu-item');
      }

    });

  });

  /* page scroll */
  $('body').on('click', '#primary-menu li a', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - nav_height + 5
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  // Smooth scroll ends

  /* Footer Fixed */
  var footerHeight = $('.site-footer').outerHeight();
  $("#content").css("margin-bottom", footerHeight);

    /* PRE LOADER  */
    $(window).on('load', function() {
        $('.loader').delay(2000).fadeOut('slow');
        $('.preloader').delay(2000).fadeOut('slow');
        $('body').delay(1000).css({
            'overflow': 'visible'
        });
    });


})(jQuery);