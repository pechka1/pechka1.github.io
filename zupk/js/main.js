let types = document.querySelectorAll('section.about_us .type .item button');

for(let type of types){
	type.addEventListener('click', function(){
		if(type.parentNode.querySelector('.list').classList.contains('show')){
			type.querySelector('span').innerHTML = 'Переглянути спеціалістів';
		}else{
			type.querySelector('span').innerHTML = 'Сховати список';
		}
		type.classList.toggle('show');
		type.parentNode.querySelector('.list').classList.toggle('show');
	})
}