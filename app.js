const ui = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
const weather = new Weather(weatherLocation.city, weatherLocation.state);
/* change weather in modal*/
document.getElementById("w-change-btn").addEventListener("click", (event) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  getWeather();
  $("#locModal").modal("hide");
});

/* Load the weather when the dom is loaded */
document.addEventListener("DOMContentLoaded", getWeather);
function getWeather() {
  weather
    .fetchWeather()
    .then((data) => ui.loadUI(data))
    .catch((error) => console.log(error));
}
