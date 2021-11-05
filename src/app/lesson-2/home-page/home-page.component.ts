import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  error: string = '';

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    // console.log('HEY 2');
  }

  register($event: any) {
    //{ registrationDate:string } , null
    this.userService.register($event);
  }

  logOut() {
    this.userService.logOut();
  }

  login($event: any) {
    this.userService.logIn($event);
  }
}
