(function ($) {
	"use strict";
    
    /*****************************************
    ## Preloader
    *****************************************/
    var $window = $(window),
        $preloader = $('#preloader');

    $window.on('load', function(){
        $preloader.delay(300).fadeOut('slow',function(){
        $preloader.remove();
        });    
    }); // $(window).on end

    /*****************************************
    ## Menu Scroll Effect
    *****************************************/
    var $body = $('body'),
        $height = $('.header').outerHeight(),
        $nextEl = $('.homepage-slides-wrapper');
        
    $window.on('scroll', function () {
        if ($window.scrollTop() > 200) {
            $body.addClass('fixed-nav');
            $nextEl.css("margin-top", $height+"px");
        } else {
            $body.removeClass('fixed-nav');
            $nextEl.css("margin-top", "0");
        }
    }); // $window.on('scroll' end
    
    //Mobile Nav
    var $mobileNav = '.navbar-collapse.in',
        $document = $(document);
    $(document).on('click',$mobileNav,function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
    
    /*****************************************
    ## Scroll To Top
    *****************************************/
    var $scrollup = $('.scrollup'); 

    $document.on('ready', function(){ 
        $window.on('scroll' ,function(){
            if ($window.scrollTop() > 800) {
                $scrollup.fadeIn();
            } else {
                $scrollup.fadeOut();
            }
        }); 
        
        $scrollup.on('click',function(){
            $html,$body.animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
    
    /*****************************************
    ## Smooth Scroll
    *****************************************/
    var $smooth_scroll = $('a.smooth_scroll'),
        $htmlbody = $('html,body'),
        $heightFixedNav = $('.header').outerHeight() - 10;
    
    $smooth_scroll.on('click',function(e){       
        e.preventDefault();
        console.log($heightFixedNav);
        $htmlbody.animate({scrollTop:$(this.hash).offset().top - $heightFixedNav}, "slow");
    });
    
    /*****************************************
    ## Intro Area Slider
    *****************************************/
	var $homepageSlides = $('.homepage-slides');
    
    jQuery(document).on('ready', function($) {
		$homepageSlides.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='icofont icofont-arrow-left'></i>", "<i class='icofont icofont-arrow-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
        });
	});


    /*****************************************
    ## WOW
    *****************************************/
    var wowSel = 'wow';
    
    var wow = new WOW({
        boxClass: wowSel,
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {},
        scrollContainer: null
    });
    
    wow.init();

    /*****************************************
    ## Magnific Popup
    *****************************************/
    var $gridItem = $('.grid-item');
        
    $gridItem.magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
        removalDelay: 400,
        mainClass: 'mfp-fade' //fade effect
    });
    
    /*****************************************
    ## Testimonial Slider
    *****************************************/
    var $testiCarousel = $('.testimonials .owl-carousel');
    
    $testiCarousel.owlCarousel({
        items: 2,
        loop: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        },
        margin: 30,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        dots: true
    });

    /*****************************************
    ## Partners Slider
    *****************************************/
    var $owl_partners = $('.partner');
    
    $owl_partners.owlCarousel({
        items: 5,
        autoPlay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            481:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:6
            }
        },
        pagination          : false,
        navigation          : false,
        autoHeight          : false,
        dots                : false,
    });

}(jQuery));