import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from './weather/weather.service';
import { WeatherController } from './weather/controller/weather.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class AppModule {}
