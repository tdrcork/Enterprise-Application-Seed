import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../../../ngrx/app.reducer';
import * as fromAuth from '../../ngrx/auth.reducers';
import * as AuthActions from '../../ngrx/auth.actions';
import * as fromUI from '../../../shared/ngrx/ui.reducer';
import * as UIActions from '../../../shared/ngrx/ui.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  uiState: Observable<fromUI.State>;
  loading: boolean;
  isLoading$: Observable<boolean>;
  emailSent$: Observable<boolean>;
  forgotPassword$: Observable<boolean>;

  loginForm: FormGroup;
  sendForgotForm: FormGroup;
  submitForgotForm: FormGroup;

  username: string;

  constructor(
    private store: Store<fromApp.AppState>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.uiState = this.store.select('ui');
    this.isLoading$ = this.store.select(fromApp.getIsLoading);
    this.emailSent$ = this.store.select(fromApp.getEmailSent);
    this.emailSent$ = this.store.select(fromApp.getForgotPassword);
    this.loading = false;

    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'password': [null, Validators.required]
    });

    this.sendForgotForm = this.formBuilder.group({
      'username': ['', [Validators.required]],
    });

    this.submitForgotForm = this.formBuilder.group({
      'username': [this.username, [Validators.required]],
      'code': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    });
  }

  onLogin() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.loading = true;
    this.store.dispatch(new AuthActions.StartLogin({email: username, password: password}));
  }

  onForgot() {
    this.loading = true;
    // this.store.dispatch(new AuthActions.ForgottenPassword);
    setTimeout(this.store.dispatch(new AuthActions.ForgottenPassword), 2000);
    this.loading = false;
  }

  onSendForgot() {
    this.store.dispatch(new AuthActions.EmailSent);
    this.username = this.sendForgotForm.value.username;
    console.log(this.sendForgotForm.value);
  }

  onSubmitForgot() {
    console.log(this.submitForgotForm.value);
  }

}
