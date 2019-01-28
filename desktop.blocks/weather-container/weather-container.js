// Получаем управляющие кнопки
let forwardButton = document.querySelector('.weather-container__navigation_scroll_forward');
let backButton = document.querySelector('.weather-container__navigation_scroll_back');

// Обработчики для щелчка по управляющим кнопкам
forwardButton.addEventListener('click', function () {
	backButton.classList.remove('weather-container__navigation_disabled');
	currentDay++;
	mapDataToDOM();
	if (currentDay == (response.length - weatherCards.length)) {
		forwardButton.classList.add('weather-container__navigation_disabled');
	}
});
backButton.addEventListener('click', function () {
	forwardButton.classList.remove('weather-container__navigation_disabled');
	currentDay--;
	mapDataToDOM();
	if (currentDay == 0) {
		backButton.classList.add('weather-container__navigation_disabled');
	}
});
