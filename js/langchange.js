const btnChange = document.querySelector('#change');
const item1 = document.querySelector('#Item1');
const item2 = document.querySelector('#Item2');
const item3 = document.querySelector('#Item3');
const eng = document.querySelector('#English');
const descr = document.querySelector('#descr');
const doForm = document.querySelector('#doForm');
let lang = 'Russian'

btnChange.addEventListener('click', function(){

	if(lang == 'Russian'){
	English();
	 }else{
	Russian();
	}

})

function English(){
	lang = 'English'
	item1.textContent = 'APPLICATION';
	item2.textContent = 'ABOUT MINT';
	item3.textContent = 'MAIN';
	eng.textContent = 'Русский';
	descr.textContent = 'Exchange your LORs for currency!World Mint - we work for you without commission.';
	doForm.textContent = 'Submit an application';
	localStorage.setItem('language', 'engl');

}
function Russian(){
	lang = 'Russian'
	item1.textContent = 'ЗАЯВКА';
	item2.textContent = 'О ДВОРЕ';
	item3.textContent = 'ГЛАВНАЯ';
	eng.textContent = 'English';
	descr.textContent = 'Обменяй свои ЛРы на валюту!Мировой Монетный Двор - работаем для вас без комиссии.';
	doForm.textContent = 'Подать заявку';
	localStorage.setItem('language', 'rus');
}

if(localStorage.getItem('language')!==null){
	l = localStorage.getItem('language');
	if(l == 'engl'){
		English()
	}else{
		Russian()
	}
}