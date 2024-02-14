import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceStreamGateway } from './binance-stream/binance-stream.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BinanceStreamGateway],
})
export class AppModule {}
