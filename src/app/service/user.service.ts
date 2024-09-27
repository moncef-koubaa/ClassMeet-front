import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getCurrentUser() : User{
    return new User(1, "Moncef", true, 1);
  }

  getUsersInRoom() : User[]{
    return [
      new User(1, "Moncef", true, 1),
      new User(2, "Amir", true, 1),
      new User(3, "Kmiha", true, 1),
      new User(4, "mouhib", true, 1),
      new User(5, "BOZZ", true, 1),
      new User(6, "HAMMA", true, 1),
      new User(7, "Moncef", true, 1),
      new User(8, "Amir", true, 1),
      new User(9, "Kmiha", true, 1),
      new User(10, "mouhib", true, 1),

    ];
  }
  leaveRoom() {
    console.log("Leave Room");
  }
}
