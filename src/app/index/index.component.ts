import { Component, OnInit,OnDestroy  } from '@angular/core';
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
export class IndexComponent implements OnInit ,OnDestroy {
  constructor(private userService: UserService,private authService: AuthService,
    private router: Router,private messageService: MessageService,private socketioService:SocketioService) { 
    this.socket = io();
  }

  messageGroups: any[] = [];
  currentUser:any=this.authService.getCurrentUser();
  messageText:String = '';
  messageGroup:any=undefined;
  private socket: SocketIOClient.Socket;
  connection;
  isTyping:boolean=false;
  typingTimer:any;
  timeOut:number=5000;

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

    this.connection = this.socketioService.getMessages().subscribe(message => {
      this.messageGroup.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
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
          
          //this.messageGroup.messages.push(data);
          this.messageText='';

          this.socketioService.sendMessage(data);

        },
        error => {
          console.log(error);
      });
  }

  messageOnChange(value) {
    
    if(!this.isTyping){
      this.isTyping=true;
      this.startTyping();
    }

    clearTimeout(this.typingTimer);
    this.typingTimer =setTimeout(()=>{    
          this.finishTyping();
     },this.timeOut);
    
  }

  startTyping(){
    
  }

  finishTyping(){
    
    this.isTyping=false;
    
  }

}