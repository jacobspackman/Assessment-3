console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function complimentAlert(evt) {
	evt.preventDefault();

	alert('Looking gucci my dude');
}

let picture = document.querySelector('img')

picture.addEventListener('mouseover', complimentAlert)