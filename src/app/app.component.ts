import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeStep = 'start';

  user: any;

  answers: string[] = [];

  startQuestions(user: any) {
    this.activeStep = 'question';
    this.user = user;
  }

  finished(answers: any) {
    this.activeStep = 'answer';
    this.answers = answers;
  }
}
