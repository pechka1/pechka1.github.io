$(document).ready(function() {
$('.slide_doc').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    navText:['<img src="image/arrow-left.png"><span>previous</span>','<span>NEXT</span><img src="image/arrow-right.png">'],
    responsive:{
        0:{
            items:1
        }
    }
})
});

//ZOOM
$(document).ready(function() {
$('.zoom').on('click',function(){
    var img = $('.slider').find('.active').find('img').attr('src');
    $('.zoom_img').removeClass('open');
    $('body').append('<div class="zoom_img open"><img src='+  img + '></div>');
    $('.zoom_img').on('click',function(){
       $('.zoom_img').removeClass('open'); 
        });
});
});

//VIDEO
$(document).ready(function(){
var first_item = $( ".video_item" ).first();
var main_video = $('.main_video');
    if(first_item){
     main_video.find('iframe').attr('src',first_item.find('iframe').attr('src'));
     main_video.find('h2').html(first_item.find('h2').html());
     main_video.find('p').html(first_item.find('.text_column').find('p').html());
     main_video.find('.down_block').html(first_item.find('.down_block').html());
    }

$('.video_item').on('click', function() {
  var lol = $(this);
 
  main_video.find('iframe').attr('src',lol.find('iframe').attr('src'));
  main_video.find('h2').html(lol.find('h2').html());
  main_video.find('p').html(lol.find('.text_column').find('p').html());
  main_video.find('.down_block').html(lol.find('.down_block').html());
  var w = $('.video_block').innerWidth();
    if(w <= 1199 && w >= 467){
        $("html, body").animate({ scrollTop: $('#video_block').offset().top},500);
    }
});
});

//Achnor
$(document).ready(function() {
    $('a.achnor').on('click', function(){
        var id = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(id).offset().top},1000)
    });
});