import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  user = {
    username: '',
    password: '',
  } as any;

  @Output()
  login = new EventEmitter<any>();

  ngOnInit(): void {}

  submit() {
    this.login.emit(this.user);
  }
}
