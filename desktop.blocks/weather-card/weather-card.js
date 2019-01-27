// Объект с названиями дней недели, месяцев, путями до погодных иконок и описанием уровня и типа осадков
var weatherCardData = {
	daysOfWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
	icons: {
		sunny: ['/assets/img/sunny.png', '/assets/img/sunny.png', '/assets/img/sunny.png', '/assets/img/sunny.png'],
		cloudy: ['/assets/img/cloudy.png', '/assets/img/rain.png', '/assets/img/snow.png', '/assets/img/rainsnow.png']
	},
	rainfall: ['Без осадков', 'Дождь', 'Снег', 'Дождь со снегом']
}

// Получаем массив карточек для погодных данных
var weatherCards = document.querySelectorAll('.weather-card');
// Переменная для погодных данных
var response;

// Запрос данных из JSON файла
window.onload = function () {
	let request = new XMLHttpRequest();
	request.open('GET', '/assets/weather-data.json');
	request.onreadystatechange = function () {
		if (this.readyState == 4) {
			if (this.status == 200) {
				// Получаем ответ, записываем в глобальную переменную
				response = JSON.parse(this.responseText);
				console.log(response);
				// Подставляем данные в DOM узлы
				for (let i = 0; i < 3; i++) {
					// День недели
					let date = new Date(response[i].date);
					weatherCards[i].querySelector('.weather-card__day-of-the-week').innerHTML = weatherCardData.daysOfWeek[date.getDay()];
					// Число и месяц
					weatherCards[i].querySelector('.weather-card__day-of-the-month').innerHTML = date.getDate() + ' ' + weatherCardData.months[date.getMonth()];
					// Выставляем иконку в зависимости от типа осадков
					let rainfall = 0;
					response[i].rain ? rainfall++ : '';
					response[i].snow ? rainfall = rainfall + 2 : '';
					weatherCards[i].querySelector('.weather-card__icon').setAttribute('src', weatherCardData.icons[response[i].cloudiness][rainfall]);
					// Температура днем и ночью
					weatherCards[i].querySelector('.weather-card__day-temperature').innerHTML = 'Днём ' + response[i].temperature.day + '°';
					weatherCards[i].querySelector('.weather-card__night-temperature').innerHTML = 'Ночью ' + response[i].temperature.night + '°';
					// Текстовое представление типа осадков
					weatherCards[i].querySelector('.weather-card__rainfall').innerHTML = weatherCardData.rainfall[rainfall];
				}
			}
			else {
				console.log('Что-то пошло не так, сервер вернул респонс ' + this.status);
			}
		}
	}
	request.send(null);
};
