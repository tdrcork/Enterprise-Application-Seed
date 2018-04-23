

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
import { AmplifyService} from 'aws-amplify-angular';


@Injectable()
export class CognitoService {

  token: string;

  constructor(private router: Router, public amplifyService: AmplifyService) {
    this.amplifyService = amplifyService;
  }

  logout() {
    this.amplifyService.auth().signOut();
  }

  resetPasswordSubmit(username, code, newPassword) {
    this.amplifyService.auth().forgotPasswordSubmit(username, code, newPassword);
  }

  setNewPassword(user, oldPassword, newPassword) {
    this.amplifyService.auth().forgotPasswordSubmit(user, oldPassword, newPassword);
  }

  sendMFAcode(user, code, mfaType=null) {
    this.amplifyService.auth().confirmSignIn(user, code, mfaType);
  }




}
