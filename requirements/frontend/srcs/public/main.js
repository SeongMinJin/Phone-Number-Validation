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
