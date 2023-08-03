var btn = document.querySelector('.btn');
var input_field = document.getElementById("input_field");
var pic = document.querySelector(".weather-icon");

async function weather(city){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbb765e8ad84da41fea46e92aeede142&units=metric`;
    const data_fetch = await fetch(url);
   if(data_fetch.status == 404){
        //window.alert("enter correct city name");
        input_field.value = "";
        input_field.placeholder="enter city name correctly";
    }
    else{
        input_field.placeholder="";
    var data= await data_fetch.json();
    console.log(data);
    var temp = data.main.temp;
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity_details").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind_details").innerHTML=data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        pic.src="clouds.png";
    }

    else if(data.weather[0].main == "Rainy"){
        pic.src="rain.png";
    }

    else if(data.weather[0].main == "Humidity"){
        pic.src="humidity.png";
    }
    else if(data.weather[0].main == "Mist"){
        pic.src="mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        pic.src="snow.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        pic.src="drizzle.png";
    }
    else if(data.weather[0].main == "Clear"){
        pic.src="clear.png";
    }
}
}

btn.addEventListener('click',()=>{
   weather(input_field.value);
});