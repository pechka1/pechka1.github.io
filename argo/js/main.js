$(document).ready(function() {
$('.slider').owlCarousel({
    loop:true,
    dots:false,
    margin:38,
    navText:["<img src='images/arrow_slider_left.png'>","<img src='images/arrow_slider_right.png'>"],
    nav:true,
    responsive:{
        0:{
            autoplay:true,
            autoplayTimeout:1500,
            nav:false,
            items:1
        },
        575:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

    $('.achnor a').on('click', function(){
        var id = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(id).offset().top},1000)
    });

});