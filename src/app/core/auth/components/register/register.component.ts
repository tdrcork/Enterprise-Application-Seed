import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  confirmForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': [null, Validators.required]
    });

    this.confirmForm = this.formBuilder.group({
      'code': ['', Validators.required]
    });
  }

  onRegister() {
    const params = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      attributes: {
        email: this.registerForm.value.email,
      }
    };
    this.auth.registerUser(params);
  }

  onConfirm() {
    const params = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      code: this.confirmForm.value.code
    };
    this.auth.confirmUser(params);
  }
}
