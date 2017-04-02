import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'fp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit() {
    this.authService.login(this.name, this.password)
      .subscribe(({token}) => {
        console.log(token);
      });
  }

}
