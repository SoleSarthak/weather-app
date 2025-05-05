import express, { Request, Response, NextFunction, RequestHandler } from "express";
import { WeatherService } from "../services/weather.service";

export const weatherRouter = express.Router();

const getWeatherHandler: RequestHandler = async (req, res, next) => {
  const city = req.query.city as string;

  if (!city) {
    res.status(400).json({ error: "Please provide a city query parameter." });
    return;
  }

  try {
    const weatherData = await WeatherService.getWeather(city);
    res.json(weatherData);
  } catch (error) {
    next(error); 
  }
};

weatherRouter.get("/", getWeatherHandler);
