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
  for(let i = 1;i < 4;i++) {
    const someDate = new Date();
    // console.log(someDate.getDay())
    const numberOfDaysToAdd = i;
    const result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    console.log(new Date(result))
    let btn1 = result
    console.log(btn1)
}
// const ccc = document.querySelectorAll(".btn")

// ccc.forEach( e => {
    // date = new Date(e.dataset.date)
    // console.log(date)
//     const todayD = new Date();
//     console.log(todayD)
// })
// function buttonCl(Dom, Data) {

// }
// function ex1() {
//     const x =
// }
// console.log(new Date)