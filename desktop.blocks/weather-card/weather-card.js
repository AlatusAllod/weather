// Объект с названиями дней недели, месяцев и путями до погодных иконок
var weatherCardData = {
	daysOfWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
	icons: {
		sunny: ['/assets/img/sunny.png', '/assets/img/sunny.png', '/assets/img/sunny.png', '/assets/img/sunny.png'],
		cloudy: ['/assets/img/cloudy.png', '/assets/img/rain.png', '/assets/img/snow.png', '/assets/img/rainsnow.png']
	},
	rainfall: ['Без осадков', 'Дождь', 'Снег', 'Дождь со снегом']
}

// Запрос данных из JSON файла
window.onload = function () {
	let request = new XMLHttpRequest();
	request.open('GET', '/assets/weather-data.json');
	request.onreadystatechange = function (e) {
		if (this.readyState == 4) {
			if (this.status == 200) {
				// Подставляем данные в DOM узлы
				var response = JSON.parse(this.responseText);
				console.log(response);

				let date = new Date(response[0].date);
				console.log(date);

				document.querySelector('.weather-card__day-of-the-week').innerHTML = weatherCardData.daysOfWeek[date.getDay()];

				document.querySelector('.weather-card__day-of-the-month').innerHTML = date.getDate() + ' ' + weatherCardData.months[date.getMonth()];

				let rainfall = 0;
				response[0].rain ? rainfall++ : '';
				response[0].snow ? rainfall = rainfall + 2 : '';
				document.querySelector('.weather-card__icon').setAttribute('src', weatherCardData.icons[response[0].cloudiness][rainfall]);

				document.querySelector('.weather-card__day-temperature').innerHTML = 'Днём ' + response[0].temperature.day + '°';
				document.querySelector('.weather-card__night-temperature').innerHTML = 'Ночью ' + response[0].temperature.night + '°';

				document.querySelector('.weather-card__rainfall').innerHTML = weatherCardData.rainfall[rainfall];
			}
			else {
				console.log('Что-то пошло не так, сервер вернул респонс ' + this.status);
			}
		}
	}
	request.send(null);
};
