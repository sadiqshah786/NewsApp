
fetch("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
.then(response => {
    return response.json();
})
.then(data1 => {
    displayNews(data1)
})
.catch(error=>{
    console.log("Data NI aya ab tk")
}  )


function displayNews(news){
    var main = document.getElementById('main')
        for(i=0; i<6;i++){

        main.innerHTML+=`
          <div class="col-md-8">
          <div class="card mb-4">
  <img src="${news.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
   <h5 class="card-title">${news.articles[i].title.slice(0,35)}...</h5>
    <p class="card-text">${news.articles[i].description}..</p>
    <a href="${news.articles[i++].url}" class="btn btn-primary" target="_blank" >Read more</a>
  </div>
</div>


</div>
<div class="col-md-4">
<div class="card">
<img src="${news.articles[i].urlToImage}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${news.articles[i].title.slice(0,35)}...</h5>
<p class="card-text">${news.articles[i].description}..</p>
<a href="${news.articles[i].url}" target="_blank" class="btn btn-primary" >Read more</a>
</div>
</div></div>
        `
    }
}


var dayMonthYear = new Date();
var dayMonthYearData = document.getElementById('dayMonthYear');
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dayMonthYears() {

    var Currentmonth = month[dayMonthYear.getMonth()]
    var CurrentDay = days[dayMonthYear.getDay()]
    var getYear = dayMonthYear.getFullYear();
    dayMonthYearData.innerHTML = `${CurrentDay}, ${Currentmonth}, ${getYear}`
}
dayMonthYears();



var weather = document.getElementById('weather');
function fetchDataOnload() {
    let lat;
    let lon;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=233a720fcff7e4f27d62707870344016`)
                .then(response => {
                    return response.json();
                })
                .then(data2 => {
                    // Atmoshphere 
                    if (data2.weather[0].id == 701 || data2.weather[0].id == 741) {
                        data2.weather[0].icon = "assests/img/mist.png";
                    }
                    else if (data2.weather[0].id == 711) {
                        data2.weather[0].icon = "assests/img/smoke.png";
                    }
                    else if (data2.weather[0].id == 721) {
                        data2.weather[0].icon = "assests/img/haze.png";
                    }
                    else if (data2.weather[0].id == 731) {
                        data2.weather[0].icon = "assests/img/dust.png";
                    }
                    else if (data2.weather[0].id == 751 || data2.weather[0].id == 761 || data2.weather[0].id == 762 || data2.weather[0].id == 771 || data2.weather[0].id == 781) {
                        data2.weather[0].icon = "assests/img/sand.png";
                    }
                    else if (data2.weather[0].id == 531 || data2.weather[0].id == 522 || data2.weather[0].id == 521 || data2.weather[0].id == 520 || data2.weather[0].id == 511 || data2.weather[0].id == 504 || data2.weather[0].id == 503 || data2.weather[0].id == 502 || data2.weather[0].id == 501 || data2.weather[0].id == 500) {
                        data2.weather[0].icon = "assests/img/rain.png";
                    }
                    else if (data2.weather[0].id == 801 || data2.weather[0].id == 802 || data2.weather[0].id == 803 || data2.weather[0].id == 804) {
                        data2.weather[0].icon = "assests/img/clouds.png";
                    }
                    else if (data2.weather[0].id == 600 || data2.weather[0].id == 601 || data2.weather[0].id == 602 || data2.weather[0].id == 611 || data2.weather[0].id == 612 || data2.weather[0].id == 613 || data2.weather[0].id == 615 || data2.weather[0].id == 616 || data2.weather[0].id == 620 || data2.weather[0].id == 621 || data2.weather[0].id == 622) {
                        data2.weather[0].icon = "assests/img/snow.png";
                    }
                    else if (data2.weather[0].id == 300 || data2.weather[0].id == 301 || data2.weather[0].id == 302 || data2.weather[0].id == 310 || data2.weather[0].id == 311 || data2.weather[0].id == 312 || data2.weather[0].id == 313 || data2.weather[0].id == 314 || data2.weather[0].id == 321) {
                        data2.weather[0].icon = "assests/img/snow.png";
                    }
                    else if (data2.weather[0].id == 200 || data2.weather[0].id == 201 || data2.weather[0].id == 202 || data2.weather[0].id == 210 || data2.weather[0].id == 211 || data2.weather[0].id == 212 || data2.weather[0].id == 213 || data2.weather[0].id == 214 || data2.weather[0].id == 221 || data2.weather[0].id == 230 || data2.weather[0].id == 231 || data2.weather[0].id == 232) {
                        data2.weather[0].icon = "assests/img/scattered-thunderstorms.png";
                    }
                    else if (data2.weather[0].id == 800) {
                        data2.weather[0].icon = "assests/img/cloudy.png";

                    }
                    weather.innerHTML += `
                    <li><span id="icon"><img id ="wImg" src="${data2.weather[0].icon}"></span> <span>${Math.floor(data2.main.temp)} <sup>o</sup></span></li>
                    <li class="weather_address"><span id="time">${data2.sys.country}</span>  <span>${(days[dayMonthYear.getDay()].slice(0, 3))}, ${dayMonthYear.getDate()}, ${month[dayMonthYear.getDay()]}, ${dayMonthYear.getFullYear()}</span></li>
                    <li><span id="timer"></span></li>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                    `

                })
                .catch(error => {
                    console.log("Current Location Not detecting....")
                })

        })
    }


}

window.onload = fetchDataOnload();


setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + " " +am_pm;

	document.getElementById("timer")
			.innerHTML = currentTime;
}
showTime();


 