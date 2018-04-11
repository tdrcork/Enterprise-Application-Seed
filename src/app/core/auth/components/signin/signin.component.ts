import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const username = this.form.value.username
    const password = this.form.value.password
    this.authService.login(username, password);
  }

}
