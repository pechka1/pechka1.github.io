$('.slider-nav').slick({
  vertical:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider_wrapp',
  centerMode: false,
  arrows: true,
  prevArrow:'<img class="button_up" src="images/arrowup.png">',
  nextArrow:'<img class="button_down" src="images/arrowdown.png">',
  verticalSwiping:true,
  focusOnSelect: true
});
$('.slider_wrapp').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
    
$(document).ready(function() {
    $('a.achnor').on('click', function(){
        var id = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(id).offset().top},1000)
    });
});