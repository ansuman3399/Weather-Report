class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.wind = document.getElementById("w-wind");
    this.feelsLike = document.getElementById("w-feels-like");
    this.windDir = document.getElementById("w-wind-dir");
  }

  loadUI(weather) {
    console.log(weather);
    this.location.textContent =
      weather.location.name + "," + weather.location.country;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent =
      weather.current.temp_c + " C " + "(" + weather.current.temp_f + " F)";
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.humidity.textContent = `Relative humidity : ${weather.current.humidity}`;
    this.wind.textContent = `Relative Wind speed : ${weather.current.gust_kph} kmph`;
    this.feelsLike.textContent = `Feels like : ${weather.current.feelslike_c} C (${weather.current.feelslike_f} F)`;
    this.windDir.textContent = `Wind direction : ${weather.current.wind_dir}`;
  }
}
