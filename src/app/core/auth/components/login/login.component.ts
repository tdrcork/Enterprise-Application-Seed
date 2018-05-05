import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'password': [null, Validators.required]
    });
  }

  onLogin() {
    const params = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.auth.startSession(params);
  }
}
