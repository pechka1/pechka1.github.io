//Dropdown menu
$(document).ready(function() {
	$('.dropdown_sidebar').find('ul').slideUp('normal');
	$('.dropdown_sidebar').on('click',function(){
			var burger = $(this);
			burger.toggleClass('open');
			burger.find('ul').slideUp('normal');
		if(burger.hasClass('open')){
			burger.find('ul').slideDown('normal');	
		}
	});


//SIDEBAR
	$('.sidebar_open').on('click',function(){
		$('.sidebar_open,.conten_block_sidebar aside,.shadow').toggleClass('open');
	});
	$('.sidebar_menu a,.shadow').on('click',function(){
		$('.sidebar_open,.conten_block_sidebar aside,.shadow').removeClass('open');
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
//Show Info
	$('.more_info').on('click', function(){
		$('header').toggleClass('open');
		});
//SLIDER HEADAER
$('.header_slider').owlCarousel({
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        }
    }
})
// Peoples Reviews  Slider
$('.reviews-slider').owlCarousel({
    loop:true,
    dots:false,
    margin:30,
    nav:true,
    navText:['<img src="images/arrow_left_s.png" >','<img src="images/arrow_right_s.png" >'],
    responsive:{
        1250:{
            items:2
        },
        551:{
        	items:1,
        	
        },
       	0:{
       		dots:true,
       		items:1,
       		autoplay:true,
    			autoplayTimeout:4000,
    		  autoplayHoverPause:true
        }
    }
})
$('.open_sorce').on('click',function(){
	$(this).closest('.right_block').find('.half_roud').toggleClass('open');
	$(this).closest('.right_block').find('.open_sorce').toggleClass('open');
});

// Parallax
$(".location_map").paroller({ 
	factor: 0.3,
	type: 'background',
	direction: 'vertical' 
});

$(".item.top").paroller({ 
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
console.log(mom);
if(mom > 0 && mom <= 6 && moment().isBetween(beforeTime, afterTime)){
	if(mom > 0 && mom <=5 && moment().isBetween(beforeTime, afterTime)){
		$('.open_close').css('color','#74e78b');
		$('.time-of-work').text('з 9:00 до 17:30');	
	}else if(mom > 0 && mom == 6 && moment().isBetween(beforeTime, afterStime)){
		$('.time-of-work').text('з 9:00 до 13:00');
	}
	else if(mom == 0){
		$('.open_close').css('color','red');
		$('.open_close').text('Закрито');	
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
//Fixed Describe
$(document).ready(function() {
	$('#add_post').on('click',function(){
		$('.block_six_response').toggleClass('open');
		$('.shadow_back').toggleClass('open');
	});	
});
$(document).ready(function() {
	$('.shadow_back').on('click',function(){
		$('.block_six_response').toggleClass('open');
		$('.shadow_back').toggleClass('open');
		$('.block_six_response_mask').removeClass('close');
	});	
});
//ScrollMagic

// $(document).ready(function() {
// 	var offsetTo = -100;
// 	var controller = new ScrollMagic.Controller();
// 	var Scene2 = new ScrollMagic.Scene({
// 		triggerElement:'.block_two',
// 		offset: offsetTo
// 	})
// 	.setClassToggle('.block_two', 'show')
// 	.addTo(controller);

// 	var ourScene3 = new ScrollMagic.Scene({
// 		triggerElement:'.block_three',
// 		offset: offsetTo
// 	})
// 	.setClassToggle('.block_three', 'show')
// 	.addTo(controller);

// 	var ourScene4 = new ScrollMagic.Scene({
// 		triggerElement:'.block_four',
// 		offset: offsetTo
// 	})
// 	.setClassToggle('.block_four', 'show')
// 	.addTo(controller);

// 		var ourScene5 = new ScrollMagic.Scene({
// 		triggerElement:'.block_five_form',
// 		offset: offsetTo
// 	})
// 	.setClassToggle('.block_five_form', 'show')
// 	.addTo(controller);

// 	var ourScene6 = new ScrollMagic.Scene({
// 		triggerElement:'.peoples_reviews_block',
// 		offset: offsetTo
// 	})
// 	.setClassToggle('.peoples_reviews_block', 'show')
// 	.addTo(controller);

		
// 	var footer = new ScrollMagic.Scene({
// 		triggerElement:'footer',
// 		offset:-1000
// 	})
// 	.setClassToggle('footer', 'show')
// 	.addTo(controller);


// 	  var sidbar = $('.sidebar_menu');
// 		TweenMax.from(sidbar,1,{x:-200,opacity:0});	
 
	

// 	var block_one = $('.block_one');
// 	TweenMax.from(block_one,1,{y:-200,opacity:0});

// 	var header = $('header');
// 	TweenMax.from(header,1,{y:-200,opacity:0});
// });
