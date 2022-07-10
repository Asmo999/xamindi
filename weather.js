fetch('http://api.weatherapi.com/v1/forecast.json?key=7cd68ba8f3e84f0f93f230620220907&q=95.104.106.120&days=7&aqi=no&alerts=no')
  .then(response => response.json())
  .then(weather => {
    if(weather){
        console.log("lasha")
        const para = document.createElement("p");
        para.innerText = "This is a paragraph.";
        document.body.appendChild(para);
    }
  })
  .catch(err => console.log(err));