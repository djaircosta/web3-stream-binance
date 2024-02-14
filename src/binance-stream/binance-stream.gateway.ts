import { WebSocketGateway, OnGatewayInit, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import * as WebSocket from 'ws';

@WebSocketGateway(3333)
export class BinanceStreamGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer() server: WebSocket.Server;
  private ws: WebSocket;

  afterInit(_server: WebSocket.Server) {
    console.log('O serviço de websocket foi inicializado!');
  }
  handleConnection(client: WebSocket, ...args: any[]) {
    console.log(`Client connected`);
    this.ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker');
    this.ws.onmessage = async (event) => {
      const obj = JSON.parse(event.data as string);
      const response = {
        simbolo: obj.s,
        oferta: obj.b,
        demanda: obj.a,
      };
      const enviarParaOCliente = JSON.stringify(response);
      client.send(enviarParaOCliente);
    };
  }
  handleDisconnection(client?: WebSocket) {
    console.log(`Client disconnected`);
  }
}
