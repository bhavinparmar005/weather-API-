let searchBotton = document.getElementById("search_button");
let apiKey = "094b1cddc40a67c426c17b4f56de2b4d";
let div =document.querySelector('.container');
let defaultCity = "Amreli";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`)
.then(defaultRes => defaultRes.json())
.then((finalRes) => {
    console.log(
                `
                            celsius    :- ${finalRes.main.temp}c
                            city       :- ${finalRes.name}
                            humidity   :- ${finalRes.main.humidity}%
                            wind speed :- ${finalRes.wind.speed}Km/h
                            `
              );
    div.innerHTML = `
            <form class="search_main" id="search_main">
                <div class="search_input">
                    <input type="text" placeholder="Search City" id="search_city">

                </div>
                <div class="search_button">
                    <button id="search_button" onclick="searchData()">
                        <div class="search_icon">
                            <img src="./Assest/ICONS/magnifying-glass-solid.svg" alt="search_icon">
                        </div>
                    </button>

                </div>

            </form>

            <div class="weather_img_main">
                <div class="weather_img">
                    <img src="./Assest/ICONS/white-sun-with-small-cloud.svg" alt="">
                </div>

            </div>

            <div class="celsius_display">
                <h1>${finalRes.main.temp}<sup>o</sup>c</h1>
            </div>

            <div class="city_name">
                <p>${finalRes.name}</p>

            </div>

            <div class="humidity_and_windSpeed_main">
                <div class="humidity">
                    <div class="humidity_icon">
                        <img src="./Assest/ICONS/water.svg" alt="">
                    </div>
                    <div class="humidity_pre">
                        <h3>${finalRes.main.humidity}%</h3> 
                        <p>Humidity</p>
                    </div>

                </div>

                <div class="wind_speed_main">
                    <div class="wind_speed_icon">
                          <img src="./Assest/ICONS/wind.svg" alt="">
                    </div>

                    <div class="wind_speed_text">
                        <h3>${finalRes.wind.speed} km/h</h3> 
                        <p>Wind Speed</p>
                    </div>

                </div>


            </div>

    
    `
})

function searchData(){

    let form = document.getElementById('search_main');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let userInput = document.getElementById("search_city");
      let city = userInput.value.trim();
      if (city === "") {
        alert("Please enter a city name");
      }
      else{
        async function getData() {
            try {
              let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
              );
        
              let finalResult = await response.json();
      
              div.innerHTML = ""
    
              div.innerHTML = `
              <form class="search_main" id="search_main">
                  <div class="search_input">
                      <input type="text" placeholder="Search City" id="search_city">
    
                  </div>
                  <div class="search_button">
                      <button id="search_button" onclick="searchData()">
                          <div class="search_icon">
                              <img src="./Assest/ICONS/magnifying-glass-solid.svg" alt="search_icon">
                          </div>
                      </button>
    
                  </div>
    
              </form>
    
              <div class="weather_img_main">
                  <div class="weather_img">
                      <img src="./Assest/ICONS/white-sun-with-small-cloud.svg" alt="">
                  </div>
    
              </div>
    
              <div class="celsius_display">
                  <h1>${finalResult.main.temp}<sup>o</sup>c</h1>
              </div>
    
              <div class="city_name">
                  <p>${finalResult.name}</p>
    
              </div>
    
              <div class="humidity_and_windSpeed_main">
                  <div class="humidity">
                      <div class="humidity_icon">
                          <img src="./Assest/ICONS/water.svg" alt="">
                      </div>
                      <div class="humidity_pre">
                          <h3>${finalResult.main.humidity}%</h3> 
                          <p>Humidity</p>
                      </div>
    
                  </div>
    
                  <div class="wind_speed_main">
                      <div class="wind_speed_icon">
                            <img src="./Assest/ICONS/wind.svg" alt="">
                      </div>
    
                      <div class="wind_speed_text">
                          <h3>${finalResult.wind.speed} km/h</h3> 
                          <p>Wind Speed</p>
                      </div>
    
                  </div>
    
    
              </div>
    
      
      `
console.log(
                `
                            celsius    :- ${finalResult.main.temp}c
                            city       :- ${finalResult.name}
                            humidity   :- ${finalResult.main.humidity}%
                            wind speed :- ${finalResult.wind.speed}Km/h
                            `
              );
            } catch (error) {
              console.log("error");
            }
          }
        
          getData();
        
      }
    
      
    
    
    });
}
