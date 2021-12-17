import { UsersService } from './../users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit, OnDestroy {
  user: any = {};

  sub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((data) => {
      const email = data.get('email');

      if (email) {
        const user = this.userService.findUserByEmail(email);

        this.user = user;
      }
    });
  }
}
