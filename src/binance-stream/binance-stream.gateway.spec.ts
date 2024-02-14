import { Test, TestingModule } from '@nestjs/testing';
import { BinanceStreamGateway } from './binance-stream.gateway';

describe('BinanceStreamGateway', () => {
  let gateway: BinanceStreamGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinanceStreamGateway],
    }).compile();

    gateway = module.get<BinanceStreamGateway>(BinanceStreamGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
