// fetch('http://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&days=7&aqi=no&alerts=no')
//   .then(response => response.json())
//   .then(weather => {
//     if(weather){
//         console.log(weather)
//         // function today() {
//         //   const para = document.createElement("p");
//         //   para.innerText = weather.current.temp_c;
//         //   document.body.appendChild(para);
//         // }

//     }
//   })
//   .catch(err => console.log(err));
function today() {
    return fetch('http://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&days=7&aqi=no&alerts=no')
    .then(response => response.json())
    .then(weather => {
      if(weather){
          console.log(weather)
          // function today() {
          //   const para = document.createElement("p");
          //   para.innerText = weather.current.temp_c;
          //   document.body.appendChild(para);
          // }
      }
    })
  }