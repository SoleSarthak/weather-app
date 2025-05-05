import axios from "axios";

export class WeatherService {
  static async getWeather(city: string) {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = "https://api.openweathermap.org/data/2.5/weather";
    
    const response = await axios.get(url, {
      params: { q: city, appid: apiKey, units: "metric" },
    });

    const { name, weather, main } = response.data;
    return {
      city: name,
      description: weather[0].description,
      temperature: main.temp,
      feels_like: main.feels_like,
      humidity: main.humidity,
    };
  }
}
