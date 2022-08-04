const btnF = document.querySelector(".btn")
const btnS = document.querySelector(".btn1")
const btnT = document.querySelector(".btn2")
const btnW = document.querySelector(".btn3")
const btnA = document.querySelector(".btn4")
const btnD = document.querySelector(".btn5")
const btnX = document.querySelector(".btn6")
let date = {};
function initDataFromApi() {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&days=7&aqi=no&alerts=no')
    .then(respone => respone.json())
    .then(response => {
        date = response.forecast.forecastday
        btnF.textContent = date[0].date + daycalc(0)
        btnS.textContent = date[1].date + daycalc(1)
        btnT.textContent = date[2].date + daycalc(2)
        btnF.dataset.date = date[0].date
        btnS.dataset.date = date[1].date
        btnT.dataset.date = date[2].date
})
}
initDataFromApi();
btnW.textContent = formatDate(3) + daycalc(3)
btnW.dataset.date = formatDate(3)
btnA.textContent = formatDate(4) + daycalc(4)
btnA.dataset.date = formatDate(4)
btnS.textContent = formatDate(5) + daycalc(5)
btnS.dataset.date = formatDate(5)
btnD.textContent = formatDate(6) + daycalc(6)
btnD.dataset.date = formatDate(6)
btnX.textContent = formatDate(7) + daycalc(7)
btnX.dataset.date = formatDate(7)
lasttargetT = {};
function ex2(event){
    ETD = event.target.dataset.date
    console.log(ETD)
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&dt=${ETD}&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(response => {
        DataRes = response.forecast.forecastday[0].hour
        event.target.disabled = true;
        lasttarget.disabled = false;
        lasttarget = event.target;
        let child1 = divs.lastElementChild
        while(child1) {
            divs.removeChild(child1)
            child1 = divs.lastElementChild
}
        for (let i = 0; i < 26; i+= 1) {       
            const x = document.createElement("p")
            x.innerText = DataRes[i].time + ": temperature  " + DataRes[i].temp_c
            x.style.textAlign = "center";
            if (x.innerText.length <= 33) {
              x.innerText += ".0"
            }
            divs.appendChild(x); 
          }
    })
}
function formatDate(x) {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + x),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-') ;
} 
function daycalc(x) {
    let d = new Date()
    if(d.getDay() == 0) {
        dayX = " Sunday" 
    }
    if(d.getDay() + x == 1) {
        dayX = " Monday" 
    }
    if(d.getDay() + x == 2) {
        dayX = " Tuesday" 
    }
    if(d.getDay() + x == 3) {
        dayX = " Wednesday" 
    }
    if(d.getDay() + x == 4) {
        dayX = " Thursday" 
    }
    if(d.getDay() + x == 5) {
        dayX = " Friday" 
    }
    if(d.getDay() + x == 6) {
        dayX = " Saturday" 
    }
    if(d.getDay() + x == 7) {
        dayX = " Sunday" 
    }
    if(d.getDay() + x == 8) {
        dayX = " Tuesday" 
    }
    if(x === 0) {
        dayX = " Today"
    }
    if(x === 1) {
        dayX = " Tommorow"
    }
    return `${dayX}`
}
let exel = {};
let lasttarget ={};
function ex1(event) {
    exel = event.target.dataset.date
    event.target.disabled = true;
    lasttarget.disabled = false; 
    lasttarget = event.target;         
    let child = divs.lastElementChild
    while(child) {
        divs.removeChild(child)
        child = divs.lastElementChild
}
    if(date.find(x => x.date === exel)) {
        delis = date.find(x => exel === x.date)
        timex = delis.hour
        for (let i = 0; i < 26; i+= 1) {         
            const x = document.createElement("p")
            x.innerText = timex[i].time + ": temperature  " + timex[i].temp_c
            x.style.textAlign = "center";
            if (x.innerText.length <= 33) {
              x.innerText += ".0"
            }
            divs.appendChild(x); 
          }
    }   
}