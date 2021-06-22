class Weather {
  constructor(city, state) {
    this.apiAccessKey = "11e6b28e6347487d860175752212206";
    this.city = city;
    this.state = state;
  }

  /* Fetch weather location */
  async fetchWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.apiAccessKey}&q=${this.city}&aqi=no`
    );
    const weatherResponse = await response.json();
    return weatherResponse;
  }
  /* Change location */
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
