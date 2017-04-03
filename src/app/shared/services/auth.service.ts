import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AuthService {

  private token: string = null;

  private loginURL = 'http://localhost:3232/auth/login';

  constructor(private http: Http) {
    this.token = sessionStorage.getItem('token');
  }

  getToken() {
    return this.token;
  }

  login(name: string, password: string) {
    return this.http.post(this.loginURL, {name, password})
      .map(response => response.json())
      .map(response => {
        this.token = response.token;
        sessionStorage.setItem('token', this.token);
        return response;
      })
  }

}
