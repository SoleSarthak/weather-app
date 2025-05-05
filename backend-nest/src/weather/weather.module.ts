import { Module } from '@nestjs/common';
import { WeatherController } from './controller/weather.controller';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios'; 
import { ConfigModule } from '@nestjs/config'; 

@Module({
  imports: [HttpModule, ConfigModule], 
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
