$(function() {
/*
$(document).ready(function(){
        $(".owl-carousel.block-one-slider").owlCarousel();
         $(".owl-carousel.block-mini-second-slider").owlCarousel();
});

    $('.owl-carousel.block-one-slider').owlCarousel({
        loop:true,
        nav:true,
        merge:true,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            }
        }
    })

    $('.owl-carousel.block-mini-second-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });
    */
(function($) { 
    $(document).ready(function(){
       $('.block-slider').slick();
    });
})(jQuery);

});

