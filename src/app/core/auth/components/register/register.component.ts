import { Component, OnInit } from '@angular/core';
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

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.StartRegistration({username: username, password: password, email: email}));
  }
}
