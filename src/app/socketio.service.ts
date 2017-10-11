import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketioService {
	private socket: SocketIOClient.Socket; // The client instance of socket.io
  	constructor() {
  		this.socket = io();
  	}

  	sendMessage(message){
      	this.socket.emit('sendMessage', message);
  	}

  	onSendMessage(){
	    this.socket.on('sendMessage', function(message){
	        console.log(message,'on');
	    });
	}

	getMessages() {
	    let observable = new Observable(observer => {
	      //this.socket = io('http://localhost:3000');
	      this.socket.on('message', (data) => {
	      	
	        observer.next(data);    
	      });
	      return () => {
	        this.socket.disconnect();
	      };  
	    })

	    return observable;
	}  
}