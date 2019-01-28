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
