$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },

        1000:{
            items:3
        }
    }
    
});

$( function() {
    $( "#accordion" ).accordion();
});
