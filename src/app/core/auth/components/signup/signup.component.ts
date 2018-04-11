import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/cognito.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  constructor(
    private cognitoService: CognitoService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const username = this.form.value.username;
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.cognitoService.registerUser(username, password, email);
  }

}
