interface WeatherJSON {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  interface Clouds {
    all: number;
  }
  
  interface Coord {
    lon: number;
    lat: number;
  }
  
  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  }
  
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  interface Wind {
    speed: number;
    deg: number;
  }
  
  const API_ID = "e4a8f58a3562607f5f3ae28e86946c5b";
  
  const input: HTMLInputElement | null = document.getElementById(
    "find-input"
  ) as HTMLInputElement | null;
  const findBtn: HTMLButtonElement | null = document.getElementById(
    "find-btn"
  ) as HTMLButtonElement | null;
  const weather: HTMLDivElement = document.getElementById(
    "weather"
  ) as HTMLDivElement;
  
  if (findBtn !== null && input !== null) {
    findBtn.addEventListener("click", () => {
      //вешаем слушатель события
      const city = input.value;
  
      console.log(city);
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=39.099724&lon=-94.578331&appid=" +
          API_ID
      )
        .then((response) => response.json())
        .then((data: WeatherJSON) => {
          const weatherElement = `<div id="weather_wrapper">
                                            <div class="weatherCard">
                                                <div class="currentTemp">
                                                    <span class="temp">${data.main.temp}</span>
                                                    <span class="location">${data.name}</span>
                                                </div>
                                                <div class="currentWeather">
                                                    <span class="conditions">&#xf00d;</span>
                                                    <div class="info">
                                                        <span class="rain">${data.main.humidity} MM</span>
                                                        <span class="wind">${data.wind.speed} MPH</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
  
          weather.innerHTML = weatherElement;
        });
    });
  }
