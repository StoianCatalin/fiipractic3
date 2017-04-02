import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AuthService {

  private loginURL = 'http://localhost:3232/auth/login';

  constructor(private http: Http) {}

  login(name: string, password: string) {
    return this.http.post(this.loginURL, {name, password})
      .map(response => response.json())
  }

}
