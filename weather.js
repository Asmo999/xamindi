const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const divs = document.getElementById("divs")
const api = 'http://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&days=7&aqi=no&alerts=no'
fetch (api)
.then(response => response.json())
.then(w => {
  if(w){
    btn.innerText = w.forecast.forecastday[0].date + "(Today)"
    btn1.innerText = w.forecast.forecastday[1].date 
    btn2.innerText = w.forecast.forecastday[2].date
    // btn3.innerText = w.forecast.forecastday[3].date
    // რატომღაც აპიში 3 დღეზე მეტი არ გამოიტანა
  }
})
function today() {
  return fetch(api)
    .then(response => response.json())
    .then(weather => {  
      if(weather){
          let child = divs.lastElementChild
            while(child) {
               divs.removeChild(child)
               child = divs.lastElementChild
}
            const para = document.createElement("p");
            para.innerText = "Current Temperature" + ":" + weather.current.temp_c;
            para.style.color = "rgb(71, 68, 68)"
            para.style.fontSize = "23px";
            para.style.textAlign = "center";
            divs.appendChild(para);
            for (let i = 0; i < 26; i++) {
              
              const x = document.createElement("p")
              x.innerText = weather.forecast.forecastday[0].hour[i].time + ": temperature  " + weather.forecast.forecastday[0].hour[i].temp_c
              x.style.color = "black"
              x.style.fontSize = "23px";
              x.style.textAlign = "center";
              if (x.innerText.length <= 33) {
                x.innerText += ".0"
              }
              divs.appendChild(x);
              btn.disabled = true;
              if (btn1.disabled) {
                btn1.disabled = false;
              }
              if (btn2.disabled) {
                btn2.disabled = false;
              } 
            }

              
      }
    })
}
function tommorow() {
  return fetch(api)
    .then(response => response.json())
    .then(weather => {  
      if(weather){
        let child = divs.lastElementChild
        while(child) {
           divs.removeChild(child)
           child = divs.lastElementChild
}
            for (let i = 0; i < 26; i++) {
              const x = document.createElement("p")
              x.innerText = weather.forecast.forecastday[1].hour[i].time + ": temperature  " + weather.forecast.forecastday[1].hour[i].temp_c
              x.style.color = "black"
              x.style.fontSize = "23px";
              x.style.textAlign = "center";
              if (x.innerText.length <= 33) {
                x.innerText += ".0"
              }
              divs.appendChild(x);
              btn1.disabled = true;
              if (btn.disabled) {
                btn.disabled = false;
              }
              if (btn2.disabled) {
                btn2.disabled = false;
              } 
            }
      }
    })
}
function DATommorow() {
  return fetch(api)
    .then(response => response.json())
    .then(weather => {  
      if(weather){
        let child = divs.lastElementChild
        while(child) {
           divs.removeChild(child)
           child = divs.lastElementChild
}
            for (let i = 0; i < 26; i++) {
              const x = document.createElement("p")
              x.innerText = weather.forecast.forecastday[2].hour[i].time + ": temperature  " + weather.forecast.forecastday[2].hour[i].temp_c
              x.style.color = "black"
              x.style.fontSize = "23px";
              x.style.textAlign = "center";
              if (x.innerText.length <= 33) {
                x.innerText += ".0"
              }
              divs.appendChild(x);
              btn2.disabled = true;
              if (btn.disabled) {
                btn.disabled = false;
              }
              if (btn1.disabled) {
                btn1.disabled = false;
              } 
            }
      }
    })
}
btn.addEventListener("click", today);
btn1.addEventListener("click", tommorow);
btn2.addEventListener("click", DATommorow);