

/* Base Angular */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AmplifyService} from 'aws-amplify-angular';

/* My Files */
import { PermissionsService } from '../permissions/permissions.service';
import * as fromApp from '../../app.reducer';
import * as AuthActions from './state/auth.actions';
import * as ui from '../ui/state/ui.actions';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private permissions: PermissionsService,
    private store: Store<fromApp.AppState>,
    public amplifyService: AmplifyService) {
    this.amplifyService = amplifyService;
  }

  registerUser(params: {username: string, password: string, attributes: {email: string}}) {
    this.store.dispatch(new ui.StartLoading);
    this.amplifyService.auth().signUp(params)
      .then(result => {
        this.permissions.addNewUserPermissions({clearance: 1, keys: ['']});
        this.store.dispatch(new ui.StopLoading);
      })
      .catch(error => {
        console.log(error);
        this.store.dispatch(new ui.StopLoading);
      });
  }

  confirmUser(params: {username: string, password: string, code: string}) {
    this.store.dispatch(new ui.StartLoading);
    this.amplifyService.auth().confirmSignUp(params.username, params.code)
      .then(result => { // TODO: make this only one request
        this.permissions.updatePermissions({clearance: 2});
        this.startSession({username: params.username, password: params.password});
        this.store.dispatch(new ui.StopLoading);
      })
      .catch(error => {
        this.store.dispatch(new ui.StopLoading);
        console.log(error.message);
      });
  }

  startSession(params: {username: string, password: string}) { // login
    this.store.dispatch(new ui.StartLoading);
    this.amplifyService.auth().signIn(params.username, params.password)
      .then(result => {
        this.permissions.setPermissionsState();
        this.store.dispatch(new AuthActions.SetToken(result));
        this.store.dispatch(new AuthActions.Authenticate);
        this.store.dispatch(new ui.StopLoading);
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.log(error.message);
        this.store.dispatch(new ui.StopLoading);
      });
  }

  endSession() { // logout
    this.store.dispatch(new ui.StartLoading);
    this.amplifyService.auth().signOut()
      .then(response => {
        this.permissions.clearPermissionsState();
        this.store.dispatch(new ui.StopLoading);
        this.store.dispatch(new AuthActions.Logout);
        this.router.navigate(['/']);
      })
      .catch(error => { this.store.dispatch(new ui.StopLoading); });
  }

  getUserToken() {
    return this.amplifyService.auth().currentAuthenticatedUser();
  }

  changePassword() {
    // TODO:  add change password flow
  }

  mfaEnable() {
    // TODO: enableMFA
  }

  mfaSendCode() {
    // TODO: send MFA code
  }

  mfaConfirmAccount() {
    // TODO: confirm MFA account
  }

  changeUserAttribute(attribute: object) {
    this.amplifyService.auth().updateUserAttributes(this.getUserToken(), attribute);
  }

  getUserAttribute(attribute) {
    return this.amplifyService.auth().userAttributes(this.getUserToken())
      .then(data => data.attribute)
      .catch(err => console.log(err.message));
  }
}
