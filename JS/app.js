// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Chnage Location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  // Change Location
  weather.changeLocation(city, country);

  // Set Location in LS
  storage.setLocationData(city, country);

  // get and display weather
  getWeather();
  // Close Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
