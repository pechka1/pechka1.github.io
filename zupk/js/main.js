let types = document.querySelectorAll('section.about_us .type .item button');

for(let type of types){
	type.addEventListener('click', function(){
		type.classList.toggle('show');
		type.parentNode.querySelector('.list').classList.toggle('show');
    if (type.parentElement.querySelector('.list').style.maxHeight){
      type.parentElement.querySelector('.list').style.maxHeight = null;
			type.querySelector('span').innerHTML = 'Переглянути спеціалістів';
    } else {
			type.querySelector('span').innerHTML = 'Сховати список';
      type.parentElement.querySelector('.list').style.maxHeight = type.parentElement.querySelector('.list').scrollHeight + "px";
    } 
	})
}


let more = document.querySelector('section.about_us .person .more');
let full_text = more.parentElement.querySelector('.full_text').innerHTML;
		more.parentElement.querySelector('.main_text').innerHTML = full_text.substring(0,193) + '...';

more.addEventListener('click',function(){
	more.classList.toggle('show');
	// if(more.classList.contains('show')){
	// }else{
	// }

	if(more.classList.contains('show')){
		more.querySelector('span').innerHTML ='заховати';
		// more.parentElement.querySelector('.main_text').style.maxHeight = null;
		more.parentElement.querySelector('.main_text').innerHTML = full_text;
		// more.parentElement.querySelector('.main_text').classList.add('show');
	}else{
		more.querySelector('span').innerHTML ='читати';
		// more.parentElement.querySelector('.main_text').style.maxHeight = more.parentElement.querySelector('.main_text').scrollHeight + "px";
		more.parentElement.querySelector('.main_text').innerHTML = full_text.substring(0,193) + '...';
	}
});