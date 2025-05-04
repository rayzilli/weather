
//get weather from api 
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

//original location
function myLocation (){
     const where = "Toronto";
     return where; 
}

//render weather to page
async function renderWeather() {

    const weatherData = await getWeather();

    console.log(weatherData);
    //main weather section  render to screen
    const dailyTemp = document.querySelector("#temperature");
    const currentCondition = document.querySelector("#current-condition");
    const highToday = document.querySelector("#hi-today");
    const lowToday = document.querySelector("#low-today");
    const dayDescription = document.querySelector("#current-description")


    //day of week 
    const day1 = document.querySelector("#day1");
    const day2 = document.querySelector("#day2");
    const day3 = document.querySelector("#day3");
    const day4 = document.querySelector("#day4");
    const day5 = document.querySelector("#day5");
    const day6 = document.querySelector("#day6");
    const day7 = document.querySelector("#day7");

    //low daily week 
    const day1low = document.querySelector("#day1low");
    const day2low = document.querySelector("#day2low");
    const day3low = document.querySelector("#day3low");
    const day4low = document.querySelector("#day4low");
    const day5low = document.querySelector("#day5low");
    const day6low = document.querySelector("#day6low");
    const day7low = document.querySelector("#day7low");

    //high daily week
    const day1high = document.querySelector("#day1high");
    const day2high = document.querySelector("#day2high");
    const day3high = document.querySelector("#day3high");
    const day4high = document.querySelector("#day4high");
    const day5high = document.querySelector("#day5high");
    const day6high = document.querySelector("#day6high");
    const day7high = document.querySelector("#day7high");

    //icons
    const day1icon = document.querySelector("#day1icon");
    const day2icon = document.querySelector("#day2icon");
    const day3icon = document.querySelector("#day3icon");
    const day4icon = document.querySelector("#day4icon");
    const day5icon = document.querySelector("#day5icon");
    const day6icon = document.querySelector("#day6icon");
    const day7icon = document.querySelector("#day7icon");

    //main weather section 
    dailyTemp.textContent = `${Math.round(weatherData.currentConditions.temp)} °C`;
    currentCondition.textContent = `${weatherData.currentConditions.conditions}`;
    highToday.textContent = `H: ${Math.round(weatherData.days[0].tempmin)}`;
    lowToday.textContent = `L: ${Math.round(weatherData.days[0].tempmax)}`;
    dayDescription.textContent = `${weatherData.description}`;

     
    //days of week in short
    day1.textContent = `${weatherData.days[1].datetime}`;
    day2.textContent = `${weatherData.days[2].datetime}`;
    day3.textContent = `${weatherData.days[3].datetime}`;
    day4.textContent = `${weatherData.days[4].datetime}`;
    day5.textContent = `${weatherData.days[5].datetime}`;
    day6.textContent = `${weatherData.days[6].datetime}`;
    day7.textContent = `${weatherData.days[7].datetime}`;

    //low temperature week 
    day1low.textContent = `L: ${Math.round(weatherData.days[1].tempmin)}`;
    day2low.textContent = `L: ${Math.round(weatherData.days[2].tempmin)}`;
    day3low.textContent = `L: ${Math.round(weatherData.days[3].tempmin)}`;
    day4low.textContent = `L: ${Math.round(weatherData.days[4].tempmin)}`;
    day5low.textContent = `L: ${Math.round(weatherData.days[5].tempmin)}`;
    day6low.textContent = `L: ${Math.round(weatherData.days[6].tempmin)}`;
    day7low.textContent = `L: ${Math.round(weatherData.days[7].tempmin)}`;


    //high temperature week 
    day1high.textContent = `H: ${Math.round(weatherData.days[1].tempmax)}`;
    day2high.textContent = `H: ${Math.round(weatherData.days[2].tempmax)}`;
    day3high.textContent = `H: ${Math.round(weatherData.days[3].tempmax)}`;
    day4high.textContent = `H: ${Math.round(weatherData.days[4].tempmax)}`;
    day5high.textContent = `H: ${Math.round(weatherData.days[5].tempmax)}`;
    day6high.textContent = `H: ${Math.round(weatherData.days[6].tempmax)}`;
    day7high.textContent = `H: ${Math.round(weatherData.days[7].tempmax)}`;

    //icons
    day1icon.textContent = `${weatherData.days[1].icon}`;
    day2icon.textContent = `${weatherData.days[2].icon}`;
    day3icon.textContent = `${weatherData.days[3].icon}`;
    day4icon.textContent = `${weatherData.days[4].icon}`;
    day5icon.textContent = `${weatherData.days[5].icon}`;
    day6icon.textContent = `${weatherData.days[6].icon}`;
    day7icon.textContent = `${weatherData.days[7].icon}`;




    console.log(weatherData.currentConditions.temp); 
    console.log('temperature minimum', weatherData.days[0].tempmin);
    console.log('temperature maximum', weatherData.days[0].tempmax);
    console.log(weatherData.currentConditions.conditions);
    console.log(weatherData.description);
   
    }


renderWeather();


