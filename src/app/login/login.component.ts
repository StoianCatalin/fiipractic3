import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'fp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.authService.login(this.name, this.password)
      .subscribe(({token}) => {
        this.name = '';
        this.password = '';
        this.router.navigate(['/add-event']);
      });
  }

}
