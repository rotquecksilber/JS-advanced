'use strict';

function getData(url, errorMessage) {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`${errorMessage} ${response.status}`);
			};

		return response.json();
		});
};

function getAbility(data, language) {
	const arr = data.effect_entries;
	const languageExists = arr.some(el => el.language.name === language);
	if(languageExists) {
		arr.forEach(el => {
			if(el.language.name === language){
				console.log(el.effect);
			}
		});
	} else {
		console.log(`Язык '${language}' не найден.`);
	};
};


getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Не удалось подключиться к покемону: Ошибка ')
	.then(data => {
	console.log(`${data.name}'s ability:`);
	getData(data.abilities[0].ability.url, 'Не удалось подключиться к способности покемона: Ошибка ')
		.then(data => getAbility(data, 'en'))
	})
		.catch(error => console.error(error));