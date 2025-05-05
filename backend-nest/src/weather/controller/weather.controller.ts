import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetWeatherDto } from '../dto/get-weather.dto';        
import { WeatherService } from '../weather.service';          

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getWeather(@Query() query: GetWeatherDto) {
    return this.weatherService.getWeather(query.city);
  }
}
