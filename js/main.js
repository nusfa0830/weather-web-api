  
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchText = document.getElementById("input");


const searchButton = document.getElementById("search-btn");

const searchTemperature =()=>{
    const cityName = searchText.value;
    searchText.value ="";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperatue(data))

}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}
const  displayTemperatue = temperature =>{
   setInnerText("city-name",temperature.name);
   setInnerText("temp",temperature.main.temp);
   setInnerText("feel-like",temperature.main.feels_like);
   setInnerText("cloud",temperature.weather[0].main);
   const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
   const imgIcon = document.getElementById("icon");
   imgIcon.setAttribute("src",url);
}