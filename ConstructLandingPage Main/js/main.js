//search
document.getElementById('search_bu').onclick = function(){
search = document.getElementById('search_in');

	if(search.classList.contains('show')){
		search.classList.remove('show');
	}
	else{
		search.classList.add('show');
	}
};

//slider
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay : true,
    autoplayTimeout : 3000,
    autoplayHoverPause:true,
    navContainerClass:'container wrapp owl-nav',
    navText : ["",""],
    responsive:{
        0:{
            items:1
        }
    }
})


//category
const buttons = document.querySelectorAll(".nav_gallary a")
for (const button of buttons) {
  button.addEventListener('click', function(event) {
  	event.preventDefault();
    show_block(button.getAttribute('href'));
     highlight(button);
  })
}
function show_block(href){//функція буде добваляти чи забирати клас який показує блок з кар
let elements = document.querySelectorAll('.gallary_show');//блоки які мають різні картинки
  for (let elem of elements){
    elem.classList.remove('show');
  }
document.querySelector(href).classList.add('show');
}

function highlight(kat) { //підсвічує діючу категорію(кнопку)
let button_k = document.querySelectorAll(".nav_gallary a");
  for (let but_k of button_k){
    but_k.classList.remove('active');
  }
kat.classList.add('active');
}
//anchors
const anchors = document.querySelectorAll('.anchors a');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


//zoom

let zoom_blocks = document.querySelectorAll('.gallary_show .mask');
let zoom_show = document.querySelector('#zoom_photo img');
zoom_blocks.forEach(function(e){// для кожно фото 
  const sibling = e.previousElementSibling; // находим блищий елемент 
  e.addEventListener('click', function(e){
	let 	new_zoom = sibling.getAttribute('src');
	zoom_show.src = new_zoom.replace('.jpg', '_zoom.jpg');
  });
});


let zoom_photo = document.getElementById('zoom_photo');
let zoom_photo_img = document.querySelector('#zoom_photo img');
document.querySelectorAll('.gallary_show li').forEach(function(e){
	e.addEventListener('click' , function(e){
		zoom_photo.classList.add('show');
	})
});
document.querySelector('#zoom_photo .mask ').onclick = function(){
	zoom_photo.classList.remove('show');
	zoom_photo_img.removeAttribute('src');//очистити src щоб не було блимання
}
document.getElementById('close_b').onclick = function(){
zoom_photo.classList.remove('show');
zoom_photo_img.removeAttribute('src');
}

//length of speech

let speechs = document.querySelectorAll('.world_news_construction .item .bottom .shot_describe');
for(let speech of speechs){
 let text = 	speech.textContent;
 let shot_text = text.substring(0, 93);
 speech.innerHTML = shot_text;
}
//email verification

let emailIn = document.querySelector('#email_form .email');
let emailSub = document.querySelector('#email_form .submit');
let emailWrong = document.querySelector('#email_form .wrong_email');
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


emailSub.addEventListener('click', function(){
	let email = emailIn.value;
	let emailCheck = emailIsValid(email);
	if(emailCheck){
		emailWrong.classList.remove('show');
		alert('Thank you!')
	}else{
		emailWrong.classList.add('show');
	}
});
























