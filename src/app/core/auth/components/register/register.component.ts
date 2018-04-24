import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../../ngrx/app.reducer';
import * as AuthActions from '../../ngrx/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') form: NgForm;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const username = this.form.value.username;
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.store.dispatch(new AuthActions.StartRegistration({username: username, password: password, email: email}));
  }
}
