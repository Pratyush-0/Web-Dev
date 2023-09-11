// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a2cd34290cmshd55829242cc8ef8p1a66e8jsna233f4054853',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let input=document.querySelector(".inputBox"); /*input text*/
// let city=input.value;
let button=document.getElementById("search");
let temp=document.querySelector(".temp");
let place=document.querySelector(".city");
let humid=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let icon=document.querySelector(".weatherIcon");

let getWeather= async(city)=>{
    // e.preventDefault();
    try {
        const response = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q="+city, options);
        const result = await response.json();
        // console.log(result.current.temp_c);
        // if(result){
            temp.innerHTML=result.current.temp_c+"°c";
            place.innerHTML=result.location.name;
            humid.innerHTML=result.current.humidity+"%";
            wind.innerHTML=result.current.wind_kph+"km/hr"; 
            input.value="";
            let iconLink=result.current.condition.icon;
            let imgNum=iconLink.split('/');
            if(result.current.is_day == 1){
                icon.src="weather/64x64/day/"+imgNum[6];
                // icon.src="images/clear.png";
            }
            else{
                icon.src="weather/64x64/night/"+imgNum[6];
                // icon.src="images/rain.png";
            }
        // }
    } catch (error) {
        console.error("Sorry we have an error!!!");
    }  
}

button.addEventListener("click",()=>getWeather(input.value));