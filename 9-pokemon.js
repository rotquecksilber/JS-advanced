'use strict';

	const request = new XMLHttpRequest();
	request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
	request.send();

	request.addEventListener('load', function() {
	const { abilities } = JSON.parse(this.responseText);
	const url0 = abilities[0].ability.url;
	
		const request = new XMLHttpRequest();
		request.open('GET', url0);
		request.send();

		request.addEventListener('load', function() {
		const {effect_entries} = JSON.parse(this.responseText);
		effect_entries.map(object => {
			if(object.language.name === 'en') {
				console.log(object.effect)
			}
		});
		});
	});

