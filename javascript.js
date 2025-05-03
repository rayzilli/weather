//find location and return weather data
const dailyTemp = document.querySelector("#temperature");
const currentCondition = document.querySelector("#current-condition");
const highToday = document.querySelector("#hi-today");
const lowToday = document.querySelector("#low-today");
const dayDescription = document.querySelector("#current-description")

async function getWeather() {
  
    try {   
        const apiKey = '9WDMMPUPV5SG59HXRLFBW949G';
        const location = myLocation(); 
        const url = (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${apiKey}&unitGroup=metric`);
        const response = await fetch (url);
        if (!response.ok)
            throw new Error(`http error!: ${response.status}`);
        const weatherData = await response.json();
        return weatherData; 
        } catch (error){
            console.error("error fetching data:",error);       
         }
    }       


function myLocation (){
     const where = "Toronto";
     return where; 
}

async function renderWeather() {
    const weatherData = await getWeather();

    console.log(weatherData);
    
    dailyTemp.textContent = `${weatherData.currentConditions.temp} °C`;
    highToday.textContent = `H: ${weatherData.days[0].tempmin}`;
    lowToday.textContent = `L: ${weatherData.days[0].tempmax}`;
     dayDescription.textContent = `${weatherData.description}`;

    console.log(weatherData.currentConditions.temp); 
    console.log('temperature minimum', weatherData.days[0].tempmin);
    console.log('temperature maximum', weatherData.days[0].tempmax);

    console.log(weatherData.currentConditions.conditions);
    currentCondition.textContent = `${weatherData.currentConditions.conditions}`;
    console.log(weatherData.description);
   

    }

renderWeather();


