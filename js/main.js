/*************************************

Template Name: Pedro - Personal Portfolio Template
Author: Bongosoft
Version: 1.0
Design and Developed by: Bongosoft

****************************************/

(function($) {
    "use strict";

    var $window = $(window),
        $body = $('body');
        /*=============================
                 PRELOADER JS
       ==============================*/
         $window.on('load', function(){

         setTimeout(function() {
             $('body').addClass('loaded');
         }, 2500);

         });
        /*=============================
            Back To Top
         ==============================*/
        //Make sure the user has scrolled at least double the height of the browser
        var toggleHeight = $(window).outerHeight();

        $(window).scroll(function() {
          if ($(window).scrollTop() > toggleHeight) {
          	//Adds active class to make button visible
            $(".m-backtotop").addClass("active");

            //Just some cool text changes
            $('h1 span').text('TA-DA! Now hover it and hit dat!')

          } else {
            //Removes active class to make button visible
            $(".m-backtotop").removeClass("active");

            //Just some cool text changes
            $('h1 span').text('(start scrolling)')
          }
        });

        //Scrolls the user to the top of the page again
        $(".m-backtotop").click(function() {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        });
    	 /*=============================
             Sticky Header Background
        ==============================*/

    		$(window).on("scroll", function() {
    			if($(window).scrollTop() > 150) {
    				$(".home-header").addClass("home-header-new");
    			} else {
    				//remove the background property so it comes transparent again (defined in your css)
    			   $(".home-header").removeClass("home-header-new");
    			}
    		});
        /*=============================
                MOBILE MENU
        ==============================*/
        $('nav#mobile-nav').meanmenu({
            // siteLogo: "<a href='index.html'><img src='images/header-banner/header-logo.png' /></a>"
            siteLogo: "<a class='logo-home' href='#home'>Pedro</a>"
        });
        /*=============================
                    Smoothscroll js
        ==============================*/
        $('.down-home-scroll,.btn-hire-contact,.logo-home').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 1000);
            event.preventDefault();
        });
        /*==========================
            PORTFOLIO ACTIVATION
        ============================*/
        $('.portfolio-content').imagesLoaded(function() {
           // PORTFOLIO ACTIVATION
           var $grid = $('.portfolio-masonry');
           $grid.isotope({
               itemSelector: '.portfolio-item',
               percentPosition: true,
           });
           // PORTFOLIO FILTERING ACTIVATION
           $('.portfolio-filter li a').on('click', function(event) {
               var filterValue = $(this).attr('data-filter');
               $grid.isotope({ filter: filterValue });
               event.preventDefault();
           });
           // FILTER MENU CLASS ADDITION
           $('.portfolio-filter li').on('click', function(event) {
               $(this).siblings('.active').removeClass('active');
               $(this).addClass('active');
               event.preventDefault();
            });
          //PORTFOLIO FILTERING RANDOM
          $('.btn-shuffle').on('click', function () {
             $grid.isotope('updateSortData').isotope({
                  sortBy: 'random'
              });
          });
          //LOAD MORE BUTTON FOR PORTFOLIO
          $('.portfolio-content').on('click', '.lode-more', function(event) {
              $('.portfolio-item').removeClass('hidden');
              $grid.isotope();
              $(this).hide();
              $('.pagination-area .load-more').append('<a class="button" href="javascript:void(0)">No More Items</a>');
              event.preventDefault();
            });
        });
       /*==========================
           TESTIMONIAL SLIDER
       ============================*/
       $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            smartSpeed: 1200,
            autoplay: true,
            navText: ["<i class='fa fa-reply fa-2x'></i>", "<i class='fa fa-share fa-2x'></i>"],
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
               items: 1,
              }
            }
        });
        /*=============================
            WOW JS
        ==============================*/
        new WOW({ mobile: false }).init();
        /*=============================
                    LIGHTBOX POPUP
        ==============================*/
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
      /*===================================
              Slider Items
      ====================================*/
        $(".carousel-single-item").owlCarousel({
           loop:true,
           center: true,
           nav:false,
           dots:true,
           autoplay:true,
           // autoplayHoverPause:true,
           autoplayTimeout:4500,
           smartSpeed: 950,
            responsive:{
               0:{
                   items:1
               },
               600:{
                   items:1
               },
               1000:{
                   items:1
               }
           }
       });

})(jQuery);
