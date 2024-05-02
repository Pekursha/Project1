var API_ID = "e4a8f58a3562607f5f3ae28e86946c5b";
var input = document.getElementById("find-input");
var findBtn = document.getElementById("find-btn");
var weather = document.getElementById("weather");
if (findBtn !== null && input !== null) {
    findBtn.addEventListener("click", function () {
        //вешаем слушатель события
        var city = input.value;
        console.log(city);
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=39.099724&lon=-94.578331&appid=" +
            API_ID)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var weatherElement = "<div id=\"weather_wrapper\">\n                                            <div class=\"weatherCard\">\n                                                <div class=\"currentTemp\">\n                                                    <span class=\"temp\">".concat(data.main.temp, "</span>\n                                                    <span class=\"location\">").concat(data.name, "</span>\n                                                </div>\n                                                <div class=\"currentWeather\">\n                                                    <span class=\"conditions\">&#xf00d;</span>\n                                                    <div class=\"info\">\n                                                        <span class=\"rain\">").concat(data.main.humidity, " MM</span>\n                                                        <span class=\"wind\">").concat(data.wind.speed, " MPH</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>");
            weather.innerHTML = weatherElement;
        });
    });
}
