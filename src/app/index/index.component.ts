import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import { SocketioService } from '../socketio.service';
import {Router} from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private userService: UserService,private authService: AuthService,
    private router: Router,private messageService: MessageService,private socketioService:SocketioService) { 
    this.socket = io();
  }

  messageGroups: any[] = [];
  currentUser:any=this.authService.getCurrentUser();
  messageText:String = '';
  messageGroup:any=undefined;
  private socket: SocketIOClient.Socket;

  ngOnInit() {
  	// get users from secure api end point
    if(this.authService.isLoggedIn()){
      this.userService.getAllFriends()
        .subscribe(users => {
            this.messageGroups = users.messageGroups;
        },
        error => {
          console.log(error);
        });
    }else{
      this.router.navigate(['/login']);
    }
  }

  createNewMessageGroup(friendId) {
      this.messageService.createNewMessageGroup(friendId)
      .subscribe(
          data => {
          console.log(data);
        },
        error => {
          console.log(error);
      });
  } 

  selectChat(chatId){
    this.messageService.getMessageGroup(chatId)
      .subscribe(
          data => {
          console.log(data);
          this.messageGroup=data;
        },
        error => {
          console.log(error);
      });
  }

  sendMessage(messageOb:any){
    messageOb.messageGroupID=this.messageGroup._id;
    messageOb.currentUserID=this.currentUser._id;

    this.messageService.sendMessage(messageOb)
      .subscribe(
          data => {
          
          this.messageGroup.messages.push(data);
          this.messageText='';

          this.socketioService.sendMessage(data);

        },
        error => {
          console.log(error);
      });
  }

  this.socket.on('gistSaved', function(gist: Gist){
      self.toasterService.pop('success', 'NEW GIST SAVED',
          'A gist with title \"' + gist.title + '\" has just been shared' + ' with stack: ' + gist.technologies);
  });
}