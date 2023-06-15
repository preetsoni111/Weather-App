console.log("hii");
const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': 'fa601a3ef0msh7b2043df316a122p16248ajsnee21bf3e8402',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then(response => {
    console.log(response)
    temp.innerHTML = response.temp
    humidity.innerHTML = response.humidity
    wind.innerHTML = response.wind_speed
    feel.innerHTML = response.feels_like
    cloud.innerHTML = response.cloud_pct
})
.catch(err => console.error(err));
}
function weathr(){
  getWeather(city.value);
}