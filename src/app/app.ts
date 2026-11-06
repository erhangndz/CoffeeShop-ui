import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { User } from '../models/user';
import { Home } from './home/home';

@Component({
  imports: [RouterOutlet, RouterLink, Home],
  selector: 'app-component',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // firstName:string ='erhan';
  // lastName:string = "gündüz";
  // age:number = 38;

  // user= {
  //   firstName:'Erhan',
  //   lastName:'Gündüz',
  //   age:38
  // }

  user1: User = {
    id: 5,
    firstName: 'Erhan',
    lastName: 'Gündüz',
    age: 38,
  };

  user2: User = {
    id: 8,
    firstName: 'Ali',
    lastName: 'Yıldız',
    age: 30,
  };

  user3: User = {
    id: 13,
    firstName: 'Ayşe',
    lastName: 'Mars',
    age: 23,
  };

userList:User[] = [this.user1,this.user2,this.user3]




}
