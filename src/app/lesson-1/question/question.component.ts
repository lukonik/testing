import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input()
  question: any;

  answer: any;

  @Output()
  goNext = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  next(){
    console.log(this.answer);
    this.goNext.emit(this.answer);
  }
}
