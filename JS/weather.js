class Weather {
  constructor(city, country) {
    this.apiKey = "86a9981dacc17ecf3fcf0f97b7c1fbe5";
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
