import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const config = {
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || "",
  PORT: process.env.PORT || 3000,
};
