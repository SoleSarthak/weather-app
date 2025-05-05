import axios from "axios";
import { WeatherData } from "../types/weather";

const API_BASE_URL = "http://localhost:3000/weather";
export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const resp = await axios.get(`${API_BASE_URL}?city=${city}`);
  return resp.data;
};
