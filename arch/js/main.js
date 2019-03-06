//MAKE MAX LETTERS = 100+-
$(document).ready(function() {
    var letters = 100;
    var letters_more = 250;
    var point = "...";
    $('.more').each(function() {
        var content = $(this).html();
        if(content.length > letters) {
            var half = content.substr(0, letters);
            var full = content.substr(letters, content.length - letters);
                        var html =  half + '<span class="point">' + 
                        point + '</span><span class="moretext">' + full + '</span>';
            $(this).html(html); 
        }
    });
    $('.more_high').each(function() {
        var content = $(this).html();
        if(content.length > letters_more) {
            var half = content.substr(0, letters_more);
            var full = content.substr(letters_more, content.length - letters_more);
                        var html =  half + '<span class="point">' + 
                        point + '</span><span class="moretext">' + full + '</span>';
            $(this).html(html); 
        }
    });

    $('.read_more_open , .read_more button').on('click', function(){
    	  	var w = $('body').innerWidth();
    	  	if(w<= 1199){
		    	$(this).closest('.inner').find('.point').toggleClass('no');
		    	$(this).closest('.inner').find('.moretext').toggleClass('open');
		    	 var txt=$(this).text();//read more/less
    			 $(this).text(txt=='read more'?'read less':'read more');
			}else{
		    	$('.moretext').toggleClass('open');
		    	$('.point').toggleClass('no');				
			}
    });	

});

//READ MORE BUTTON
var modal = $('#modal');
var firstStyle =$('.with-bg')
$('.read_more_open').on('click', function() {
  	var w = $('.architecture_block_w').innerWidth();
  	if(w >= 1199){
	$('.read_more').toggleClass('open');//open modal window
	var self = $(this);
  var currentArticle = self.closest('.article');
 
  modal.find('.text_modal').html(currentArticle.find('.more , .more_high').html());
  modal.find('.bg_modal').css('background-image',currentArticle.find('.inner.with-bg').css('background-image'));
  	if(currentArticle.find('.with-bg').hasClass('one')){//change color
  		$('.read_more').addClass('one')
  	}
  	else if(currentArticle.find('.with-bg').hasClass('two')){
  		$('.read_more').addClass('two')
  	}
  }	
});

//READ MORE CLOSE BUTTON  
$(".read_more button").click(function(){
  $(".read_more").removeClass('open two one');
})

// ADD CROSS TO NAV BAR
$(".navbar-toggle").click(function(){
  $('.navbar-toggle').find('span').toggleClass('remove');
  $('.navbar-toggle').closest('.navbar ').find('.mask_background_nav').toggleClass('open');
})

//Background
$(".navbar-toggle").click(function(){
	$(".navbar-toggle").closest('.navbar').find('.block_form').toggleClass('mask');
})
//Achnor
$(document).ready(function() {
    $('a.achnor').on('click', function(){
        var id = $(this).attr('href');
        $("html, body").animate({ scrollTop: $(id).offset().top},1000)
    });
});