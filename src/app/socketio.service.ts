import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketioService {
	private socket: SocketIOClient.Socket; // The client instance of socket.io
  	constructor() {
  		this.socket = io();
  	}

  	sendMessage(message){
      this.socket.emit('sendMessage', message);
  	}

}
