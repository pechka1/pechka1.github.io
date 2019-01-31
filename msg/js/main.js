$(document).ready(function() {
	$('.dropdown_sidebar').on('click',function(){
		$(this).toggleClass('open');
	});
//Anchor

	$('a.anchor').on('click', function(){
		var id = $(this).attr('href');
		$('html, body').animate({scrollTop: $(id).offset().top},1000)
	});
});

$('#comment').attr('placeholder', 'Комментарий: ' + '\n' + 'Могу ли я записаться на 16:00 во вторник?');


$('.owl-carousel').owlCarousel({
    loop:true,
    // nav:true,
    // navText:['&#x27;next&#x27;','&#x27;prev&#x27;'],
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        1000:{
            items:1
        }
    }
})
// Parallax
$(".location_map").paroller({ 
	factor: 0.5,
	type: 'background',
	direction: 'vertical' 
});