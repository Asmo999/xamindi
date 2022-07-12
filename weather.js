const btn = document.getElementById("btn")

function today() {
  return fetch('http://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&days=7&aqi=no&alerts=no')
    .then(response => response.json())
    .then(weather => {
      if(weather){
          console.log(weather)
            const para = document.createElement("p");
            para.innerText = "Current Temperature" + ":" + weather.current.temp_c;
            document.body.appendChild(para);
            for (let i = 0; i < 26; i++) {
              const x = document.createElement("p")
              x.innerText = weather.forecast.forecastday[0].hour[i].time + ": temperature  " + weather.forecast.forecastday[0].hour[i].temp_c
              document.body.appendChild(x);
            }
            
            // const para1 = document.createElement("p");
            // para1.innerText = weather.forecast.hour[0].time + ":" + weather.current.temp_c;
            // document.body.appendChild(para);

      }
    })
}
btn.addEventListener("click", today)