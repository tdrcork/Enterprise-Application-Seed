/* Base Angular */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/* My Files/Modules/Services */

/* Special */
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';

/* ngrx */
import * as fromAuth from '../ngrx/auth.effects';
import * as fromApp from '../../ngrx/app.reducer';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';


@Injectable()
export class CognitoService {

  token: string;

  constructor(
    private router:  Router,
    private amplifyService: AmplifyService,
    private store: Store<fromApp.State>,
  ) { this.amplifyService.auth = Auth; }

  logout() {
    Auth.signOut()
  }

  resetPasswordSubmit(username, code, newPassword) {
    Auth.forgotPasswordSubmit(username, code, newPassword);
  }

  setNewPassword(user, oldPassword, newPassword) {
    Auth.forgotPasswordSubmit(user, oldPassword, newPassword);
  }

  sendMFAcode(user, code, mfaType=null) {
    Auth.confirmSignIn(user, code, mfaType)
  }

  getUserInfo(attribute) {
    this.info = fromPromise(Auth.currentUserInfo().then((data) => data.attribute));
  } // TODO:  make sure that this code works, set up the variable to keep it.

  // TODO: SEE WHAT THE OUTPUTS ARE FOR EACH OF THE METHODS HERE.



}
