const inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
	input.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			if (index !== inputs.length - 1) {
				inputs[index + 1].focus();
			} else {
				console.log('search start!');
			}
		}
	})
})

// const button = document.querySelector('button');

// button.addEventListener('click', search);

// function search() {

// 	fetch('http://localhost:3000/', {
// 		headers: {
// 			first: inputs[0].value,
// 			middle: inputs[1].value,
// 			last: inputs[2].value,
// 		}
// 	}).then((res) => {
// 		console.log(res);
// 	}).catch((err) => {
// 		console.log(err);
// 	});
// }