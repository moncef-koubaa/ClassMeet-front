import { Component } from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../service/user.service";
import {WebSocketService} from "../service/web-socket.service";
import {min, of} from "rxjs";
import {NgClass, NgForOf} from "@angular/common";
import {style} from "@angular/animations";
import {UsersRowComponent} from "../users-row/users-row.component";

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    NgForOf,
    UsersRowComponent,
    NgClass
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  user: User = new User(0, '', false, 0);
  userRows : User[][] = [];
  usersInRoom: User[] = [];
  constructor(
    private userService: UserService,
    private webSocketService: WebSocketService
  ) {

  }
  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.usersInRoom = this.userService.getUsersInRoom();
    let numberOfRow = 0;
    if(this.usersInRoom.length <= 1){
      numberOfRow = 1;
    }
    else if (this.usersInRoom.length <= 6){
      numberOfRow = 2;
    }
    else{
      numberOfRow = 3;
    }
    for(let i = 0 ; i< numberOfRow ; i++){
      this.userRows.push([]);
    }
    console.log("numberOfRow : ", numberOfRow);
    console.log("usersInRoom : ", this.userRows);
    for(let i = 0 ; i<Math.min(this.usersInRoom.length,9) ; i++){
      this.userRows[i%numberOfRow].push(this.usersInRoom[i]);
    }
  }
  leaveRoom() {
    this.userService.leaveRoom();
  }
  // getHeight() : string{
  //
  //   let n = this.usersInRoom.length;
  //   let ma9am =  Math.ceil(n/3);
  //   let pourcentage = 100 / ma9am;
  //   console.log("pourcentage : ", pourcentage);
  //   return pourcentage + "%";
  //
  // }
  // getWidht(index : number) : string{
  //   const width = window.innerWidth;
  //   let n = this.usersInRoom.length;
  //   if (width >= 800) {
  //     let ma9am = n % 3;
  //     if (ma9am == 0) {
  //       console.log("32.66%")
  //       return "32.66%";
  //     }
  //     if (ma9am == 1) {
  //       if (n - index - 1 < ma9am) {
  //         console.log("100%")
  //         return "98%";
  //       } else {
  //         console.log("32.66%")
  //         return "32.66%";
  //       }
  //     }
  //     if (ma9am == 2) {
  //       if (n - index - 1 < ma9am) {
  //         console.log("49%")
  //         return "49%";
  //       } else {
  //         console.log("32.66%")
  //         return "32.66%";
  //       }
  //     }
  //     return "32.66%";
  //   }
  //   else{
  //     let ma9am = n % 2;
  //     if (ma9am == 0) {
  //       console.log("50%")
  //       return "49%";
  //     }
  //     if (ma9am == 1) {
  //       if (n - index - 1 < ma9am) {
  //         console.log("100%")
  //         return "98%";
  //       } else {
  //         console.log("50%")
  //         return "49%";
  //       }
  //     }
  //   }
  //   return "49%";
  // }
  getGridRowsClass() {
    return 'grid-rows-' + this.userRows.length;
  }
}
