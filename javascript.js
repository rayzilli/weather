//find location and return weather data
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
    console.log(weatherData.currentConditions.temp)
    console.log(weatherData.currentConditions.conditions);
    console.log(weatherData.description)
    console.log('temperature minimum', weatherData.days[0].tempmin);
    console.log('temperatture maximum', weatherData.days[0].tempmax);

    
    }

renderWeather();


