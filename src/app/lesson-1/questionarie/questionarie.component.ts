import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questionarie',
  templateUrl: './questionarie.component.html',
  styleUrls: ['./questionarie.component.scss'],
})
export class QuestionarieComponent implements OnInit {
  @Output()
  finished = new EventEmitter<string[]>();

  questions = [
    {
      question: 'Saqartvelos dedaqalqi?',
      scrole: 0.2,
      options: ['Batumi', 'Tbilisi', 'London'],
    },

    {
      question: 'Saqartvelos erovnuli valuta?',
      scrole: 0.2,
      options: ['USD', 'EURO', 'RUBLI'],
    },
  ];

  answers: string[] = [];

  activeQuestionIndex: any;

  constructor() {}

  ngOnInit(): void {
    this.activeQuestionIndex = 0;
    // this.questions[0];
    //qw/eqweqw
  }

  nextQuestion(answer: string) {
    this.answers.push(answer);

    if (this.questions.length <= this.activeQuestionIndex + 1) {
      this.finished.emit(this.answers);
    } else {
      this.activeQuestionIndex++;
    }
  }
}
