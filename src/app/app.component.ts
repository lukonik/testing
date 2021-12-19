import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, merge, timer } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  skipUntil,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
 

  constructor(private http: HttpClient) {
    // this.http.get('/api/user').subscribe(() => {
    //   this.logSomething();
    // });
    
  }
  ngAfterViewInit(): void {}

  
}
