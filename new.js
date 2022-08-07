const btnF = document.querySelector(".btn")
const btnS = document.querySelector(".btn1")
const btnT = document.querySelector(".btn2")
const btnW = document.querySelector(".btn3")
const btnA = document.querySelector(".btn4")
const btnD = document.querySelector(".btn5")
const btnX = document.querySelector(".btn6")
btnW.textContent = formatDate(3) + daycalc(3)
btnW.dataset.date = formatDate(3)
btnA.textContent = formatDate(4) + daycalc(4)
btnA.dataset.date = formatDate(4)
btnD.textContent = formatDate(5) + daycalc(5)
btnD.dataset.date = formatDate(5)
btnX.textContent = formatDate(6) + daycalc(6)
btnX.dataset.date = formatDate(6)
btnW.dataset.dataX = "dataFW"
btnA.dataset.dataX = "dataFA" 
btnD.dataset.dataX = "dataFS" 
btnX.dataset.dataX = "dataFD"
btnW.dataset.Num = "3"
btnA.dataset.Num = "4" 
btnD.dataset.Num = "5" 
btnX.dataset.Num = "6"  
let date = {};
let exel = {};
let lasttarget ={};
let dateWASX = "STD";
let DataRes = {};
dataFW = [];
dataFA = [];
dataFS = [];
dataFD = [];
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
async function ex2(event){
    ETD = event.target.dataset.date
    ESD = event.target.dataset.dataX
    ESN = event.target.dataset.Num
    if(window[ESD] instanceof Array && window[ESD].find(x => x.date == formatDate(parseInt(ESN)))) {
        }
    else {
        await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&dt=${ETD}&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(response => {
        if(ETD == formatDate(parseInt(ESN))){
            window[ESD] = response.forecast.forecastday
        }
    })
    }
            console.log("lasha")
            exelW = event.target.dataset.date
            dateWASX = window[ESD]
            DataRes = dateWASX[0].hour
            event.target.disabled = true;
            lasttarget.disabled = false;
            lasttarget = event.target;
            let child1 = divs.lastElementChild
            while(child1) {
                divs.removeChild(child1)
                child1 = divs.lastElementChild
    }
            if(dateWASX.find(x => x.date === exelW)) {
                for (let i = 0; i < 26; i+= 1) {       
                const x = document.createElement("p")
                x.innerText = DataRes[i].time + ": temperature  " + DataRes[i].temp_c
                x.style.textAlign = "center";
                if (x.innerText.length <= 33) {
                  x.innerText += ".0"
                }
                divs.appendChild(x); 
              }
            }
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
        delis = date.find(x => exel === x.date).hour
        for (let i = 0; i < 26; i+= 1) {         
            const x = document.createElement("p")
            x.innerText = delis[i].time + ": temperature  " + delis[i].temp_c
            x.style.textAlign = "center";
            if (x.innerText.length <= 33) {
              x.innerText += ".0"
            }
            divs.appendChild(x); 
          }
    }   
}
function daycalc(num) {
    let someDate = new Date();
    let numberOfDaysToAdd = num;
    let result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    let sd = new Date(result).toString().slice(0, 3)
    if(num === 0) {
        sd = "Today"
    }
    if(num === 1) {
        sd = "Tommorow"
    }
    return " "+ sd
}