import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  user = {
    username: '',
    password: '',
  } as any;

  @Output()
  register = new EventEmitter<any>();

  ngOnInit(): void {}

  submit() {
    this.register.emit(this.user);
  }
}
