let ageTitle=document.getElementById("age");console.log("Hello world"),window.onload=()=>{document.querySelector("header");document.addEventListener("scroll",e=>{console.log(e.target.scrollTop)});var e,t=document.querySelectorAll(".smooth-scroll");for(e of t)e.addEventListener("click",e=>{e.preventDefault();e=e.target;document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"center"})})};const form=document.getElementById("contact-form");function handleFormSubmit(e){e.preventDefault(),console.log("Отправка!")}form.addEventListener("submit",e=>{e.preventDefault();let t=Array.from(e.target.elements).map(e=>({name:e.name,value:e.value}));t=t.filter(e=>!!e.name);const n=new FormData;t.forEach(e=>{n.append(e.name,e.value)}),console.log(n),form.addEventListener("submit",()=>{button.textContent="Отправлено"})}),localStorage.setItem("username","text");var username=localStorage.getItem("username");console.log(username),localStorage.removeItem("username");const container=document.getElementById("myCarousel"),options={infinite:!1},API_ID=(new Carousel(container,options),"e4a8f58a3562607f5f3ae28e86946c5b"),input=(console.log("weather"),document.getElementById("find-input")),findBtn=document.getElementById("find-btn"),weather=document.getElementById("weather");findBtn.addEventListener("click",()=>{const n=input.value;console.log(n),fetch("https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=39.099724&lon=-94.578331&date=2020-03-04&appid="+API_ID).then(e=>e.json()).then(e=>{var t=`<div id="weather_wrapper">
                                    <div class="weatherCard">
                                        <div class="currentTemp">
                                            <span class="temp"> </span>
                                            <span class="location">${n}</span>
                                        </div>
                                        <div class="currentWeather">
                                            <span class="conditions">&#xf00d;</span>
                                            <div class="info">
                                                <span class="rain">1.3 MM</span>
                                                <span class="wind">10 MPH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;weather.innerHTML=t,console.log(json)})});