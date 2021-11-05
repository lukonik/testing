import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isAuthorized = false;

  constructor(private http: HttpClient) {}

  register(data: { email: string; password: string }) {
    this.http
      .post<{ id: number; token: string }>(
        'https://reqres.in/api/register',
        data
      )
      .subscribe(() => {
        this.isAuthorized = true;
      });
  }

  logIn(data: { username: string; password: string }) {
    this.http.post('https://reqres.in/api/login', data).subscribe(() => {
      this.isAuthorized = true;
    });
  }

  logOut() {
    this.isAuthorized = false;
  }
}
