import { Injectable } from '@angular/core';
import {Socket} from "socket.io";
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: any;
  constructor() {
    //this.socket = io("http://localhost:3000");
  }
  connect() {
    console.log('Initialize WebSocket Connection');



  }
}
