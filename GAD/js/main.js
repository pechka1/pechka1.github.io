//more post
$(function(){
    $(".block_post_formations_small .item").slice(12).addClass('hidden_post'); 
    $("#load").click(function(){ 
        $(".block_post_formations_small .item").slice(12).toggleClass('hidden_post');
        $(".arrow_post_more").toggleClass('rotate');
      	var text = $('.more_articals').find('p').text();
      	 $('.more_articals').find('p').text(
        text == "Show less" ? "PLUS D'ARTICLES" : "Show less");
    });
});
// $(".scroll_top_s").click(function() {
//     	// range =  $(".slide_item").prevAll().offset().top ;
//     $([document.documentElement, document.body]).animate({scrollTop: $(".slide_item").prevAll().offset().top}, 500);
  
// });
// $(".scroll_down_s").click(function() {
//     	// range =  $(".slide_item").prevAll().offset().top ;

//      $([document.documentElement, document.body]).animate({scrollTop: $(".slide_item").nextAll().offset().top}, 500);
     
// });

function scroll(e) {
  var $this = $(e.target),
      $box = $this.parents('.slide_item');
  if ($this.hasClass('scroll_top_s')) {
    var param = $box.prevAll().offset().top;
  } else {
    var param = $box.nextAll().offset().top;
  }
  $('html, body').stop().animate({scrollTop: param},1000);}

$('.scroll_down_s , .scroll_top_s').on('click', scroll);
//------Achore
$(document).ready(function() {
    $('a.achnor').on('click', function(){
        var id = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(id).offset().top},1000)
    });
});