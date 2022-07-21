let date = {};
function initDataFromApi() {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=e880f747d57f409ba9b125456221207&q=95.104.106.120&days=7&aqi=no&alerts=no')
    .then(respone => respone.json())
    .then(response => {
        console.log(response.forecast.forecastday)
        console.log(typeof(response.forecast.forecastday[0].date))
        date = response
})
}
// setInterval(consolex, 2000)
initDataFromApi();
function consolex() {
    console.log(date)
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

    return [year, month, day].join('-');
}   
const btnF = document.querySelector(".btn")
const btnS = document.querySelector(".btn1")
const btnT = document.querySelector(".btn2")
btnF.dataset.date = formatDate(0)
btnS.dataset.date = formatDate(1)
btnT.dataset.date = formatDate(2)
let exel = {};
halal = [2, 3, 3]
function ex1(event) {
    console.log(event.target.dataset.date) 
    exel = event.target.dataset.date
    // console.log(typeof(exel))
    // console.log(typeof(date.forecast.forecastday))
    // console.log(exel == date)
    if(date.forecast.forecastday.find(x => x.date === exel)) {
        console.log("hello")
    }
}
