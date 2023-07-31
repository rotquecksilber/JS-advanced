'use strict';

function getGeolocation () {
return new Promise((resolve, reject) => {
	navigator.geolocation.getCurrentPosition((position) => resolve(position.coords),
	(error) => {
		if (error.code === error.PERMISSION_DENIED){
			reject(new Error('Доступ к геолокации запрещен.'));
		} else {
			reject(new Error('Ошибка получения геолокации ' + error.message));
		}
	}
	);
});
};


getGeolocation()
	.then(coordinates => 
		console.log(`latitude: ${coordinates.latitude}
longitude: ${coordinates.longitude}`))

	.catch((error) => {
    	console.error(new Error('Произошла ошибка при получении геолокации: ' + error.message));
 	});


