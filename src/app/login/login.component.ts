import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  username: any;
  password: any;
  toast: any;

  onSubmit() {
    if (this.username == null) {
      let str: String = "Enter Username"
      this.toast = str;
    } else if (this.password == null) {
      this.toast = "Enter Password"
    }
    else if (this.username != "krupal") {

      this.toast = "Wrong Username";
    } else if (this.password != "krupal") {

      this.toast = "Wrong Password";

    }

    else if (this.username == "krupal" && this.password == "krupal") {
      this.router.navigate(['/user']);


    }
  }











}
