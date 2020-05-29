// Init Weather object
const weather = new Weather("Cambridge", "GB");
// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
