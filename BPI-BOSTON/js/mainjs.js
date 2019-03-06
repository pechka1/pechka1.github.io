	$(document).ready(function () {

		$('.acc-head').click(function () {
			$(this).toggleClass('rotate').prev().slideToggle();
			$('.acc-head').not(this).removeClass('rotate').prev().slideUp();
        });
    });

//----------Read more// Read less//////////////
var read = document.getElementsByClassName('acc-head');
for(var i=0;i<read.length; i++){
	read[i].onclick = more_less;
}
function more_less(){
	if(this.innerHTML=="Read More"){
		this.innerHTML = "Read Less";
	}
	else{
		this.innerHTML="Read More";
		}
}