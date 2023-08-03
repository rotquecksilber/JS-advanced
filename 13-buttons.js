'use strict';

const wrapper = document.querySelector('.wrapper');

function handleButtonClick(event) {
	const clickedButton = event.target;

  	if (clickedButton.tagName === 'BUTTON') {
   		const activeButton = wrapper.querySelector('.active-button');
    	if (activeButton) {
     		activeButton.classList.remove('active-button');
			activeButton.innerHTML = 'Нажми меня'
    	}
    		clickedButton.classList.add('active-button');
			clickedButton.innerHTML = 'Нажата!';

			const counter = wrapper.querySelector('.counter');
			counter.innerHTML = Number(counter.innerHTML) + 1;
 	}
}

wrapper.addEventListener('click', handleButtonClick);
