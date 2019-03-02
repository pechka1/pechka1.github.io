//Dropdown menu
$(document).ready(function() {
	$('.dropdown_sidebar').on('click',function(){
		$(this).toggleClass('open');
	});
//BLOCK INFO
	$('.info_block').on('click',function(){
		$('.block_six_response_mask').addClass('close');
	});
//Anchor
	$('a.anchor').on('click', function(){
		var id = $(this).attr('href');
		$('html, body').animate({scrollTop: $(id).offset().top - 50} ,1000)
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
	factor: 0.3,
	type: 'background',
	direction: 'vertical' 
});

$(".item").paroller({ 
	factor: 0.5,
	type: 'background',
	direction: 'vertical' 
});
//MASK for phone
$('#telephon_number').mask("+38 (999)-999-9999")

//VAKIDATE
$('#main_form').validate({
	rules: {
		name:{
			required:true,
		},
		phone:{
			required:true
		}
	},
	messages:{
		name:{
			required:'Ведіть імя'
		},
		phone:{
			required:'Ведіть телефон'
		}
	},
	invalidHandler: function(){
	 	$('.error-line').addClass('open');
	 	console.log('add');	 
	}
});
//moment
$(document).ready(function() {
var  beforeTime = moment('09:00', 'HH:mm');
var  afterTime = moment('17:30', 'HH:mm');
var  afterStime = moment('13:00','HH:mm');

var mom = moment().format("d");
if(mom <= 6 && moment().isBetween(beforeTime, afterTime)){
	if(mom <=5 && moment().isBetween(beforeTime, afterTime)){
		$('.open_close').css('color','#74e78b');
		$('.time-of-work').text('з 9:00 до 17:30');	
	}else if(mom == 6 && moment().isBetween(beforeTime, afterStime)){
		$('.time-of-work').text('з 9:00 до 13:00');
	}
	else{
		$('.open_close').css('color','red');
		$('.open_close').text('Закрито');
}	
}
else{
	$('.open_close').css('color','red');
	$('.open_close').text('Закрито');
}
});
