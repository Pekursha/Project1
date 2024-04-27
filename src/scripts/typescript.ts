// Попытка переноса в ts не увенчалась успехом

/*const API_ID = "e4a8f58a3562607f5f3ae28e86946c5b";

console.log("weather")
const input : HTMLInputElement | null = document.getElementById("find-input") as HTMLInputElement | null;
const findBtn : HTMLButtonElement | null = document.getElementById("find-btn") as HTMLButtonElement | null;
const weather : HTMLDivElement = document.getElementById("weather") as HTMLDivElement; 


findBtn.addEventListener("click", () => { //вешаем слушатель события
  const city = input.value;

console.log(city)
    // API c сервером
    fetch("https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=39.099724&lon=-94.578331&date=2020-03-04&appid=" + API_ID)
        .then((response) => response.json())
        .then((data) => { 
        const weatherElement = `<div id="weather_wrapper">
                                    <div class="weatherCard">
                                        <div class="currentTemp">
                                            <span class="temp">10</span>
                                            <span class="location">${city}</span>
                                        </div>
                                        <div class="currentWeather">
                                            <span class="conditions">&#xf00d;</span>
                                            <div class="info">
                                                <span class="rain">1.3 MM</span>
                                                <span class="wind">10 MPH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                                
        weather.innerHTML = weatherElement;
        console.log(JSON);           
                 
        }
    )
});*/
