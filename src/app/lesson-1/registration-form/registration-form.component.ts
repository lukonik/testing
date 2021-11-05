import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  genders = ['Male', 'Female', 'Unknown'];

  user = {
    firstName: 'Luka',
    lastName: '',
    alive: true,
    gender: '',
    birthDate: '',
  } as any;

  @Output()
  start = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.start.emit(this.user);
  }
}
