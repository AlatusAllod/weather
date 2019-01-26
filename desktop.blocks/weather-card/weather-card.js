window.onload = function () {
	var request = new XMLHttpRequest();
	request.open('GET', '/assets/weather-data.json');
	request.onreadystatechange = function (e) {
		if (this.readyState == 4) {
			if (this.status == 200) {
				var response = JSON.parse(this.responseText);
				console.log(response);

			}
			else {
				console.log('Что-то пошло не так, сервер вернул респонс ' + this.status);
			}
		}
	}
	request.send(null);
};
