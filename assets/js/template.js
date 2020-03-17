 $(document).ready(function(){
    /*Navbar
    ========*/
    $(".dropdown-trigger").dropdown();
    /*MaterialBoxed
    ===============*/
    $('.materialboxed').materialbox();
    /*Coursel Index
    ===============*/
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        loop:true,
        margin:100,
        nav:false,
        autoHeight:true,
        stagePadding:100,
        autoplay:true,
        autoplayHoverPause:false,
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
});

jQuery(document).ready(function($) {
    $('.fadeOut').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
    });
    $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
    });
});