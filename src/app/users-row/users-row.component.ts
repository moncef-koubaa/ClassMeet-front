import {Component, Input} from '@angular/core';
import {User} from "../models/user.model";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-users-row',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './users-row.component.html',
  styleUrl: './users-row.component.css'
})
export class UsersRowComponent {
  @Input() users: User[] = [];
  constructor() {
  }
  addUser(user: User) {
    this.users.push(user);
  }
  removeUser(user: User) {
    this.users = this.users.filter(u => u.getId() !== user.getId());
  }
  getUsers() {
    return this.users;
  }
  getLength() {
    return this.users.length;
  }
  getFirstUser() {
    return this.users[0];
  }
  getLastUser() {
    return this.users[this.users.length - 1];
  }
  getUser(index: number) {
    return this.users[index];
  }
  getRow() {
    return this.users;
  }
  getGridClass() {
    console.log('grid-cols-' + this.users.length);
    return 'grid-cols-' + this.users.length;

  }



}
