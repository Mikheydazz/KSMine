const formR = document.getElementById('form');
const formE = document.getElementById('form2');

if(lang == 'English'){
	formR.style.display = 'none';
	formE.style.display = 'block';
} else{
	formR.style.display = 'block';
	formE.style.display = 'none';
}