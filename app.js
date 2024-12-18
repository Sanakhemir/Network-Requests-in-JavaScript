
const { response } = require("express");


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "f29db718496190f279ef569a9aaa2182";



weatherForm.addEventListener("submit", event =>{

    event.preventDefault();

    const city = cityInput.Value;

    if(city){
        try{
            const weatherData = await getWeatherData (city);
            displayWeatherInfo(weatherData)

        }
        catch(error){
            console.error(error);
            displayError(error);

        }

    }
    else{
        displayError("Please enter a city");
    }

});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const reponse = await fetch(apiUrl);

    if (!response.ok){
        throw new Error("Could net fetch weather data");
    }
    return await response.json()

}

function displayWeatherInfo(data){

   const {name: city, 
         main: {temp, humidity}, 
         weather: [{description, id }]} = data;

    card.textContent = ""  ;
    card.Style.display ="flex";   


    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const getWeatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1) }°C`;
    humidityDisplay.textContent = `Humidity: ${(humidity)}%`;
    descDisplay.textContent = description;
    getWeatherEmoji.textContent = getWeatherEmoji(id)



    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
    getWeatherEmoji.classList.add("weatherEmoji")



    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild( weatherEmoji );
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return ""
    }
    
}

function displayError(message){

    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent =" ";
    card.computedStyleMap.display = "flex";
    card.appendChild(errorDisplay);



}