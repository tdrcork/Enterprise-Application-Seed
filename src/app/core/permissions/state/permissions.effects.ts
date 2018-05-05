import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as PermissionsActions from './permissions.actions';
import * as AuthActions from '../../auth/state/auth.actions';
import { PermissionsService } from '../permissions.service';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private permissions: PermissionsService
    ) {}

@Effect()
addKey = this.actions$;
/* logic here */

deleteKey = this.actions$;
/* logic here */
/*
STEP 1:  get key to delete/add
STEP 2:  get curent list of keys
STEP 3:  modify accordingly
STEP 4:  run updateUserPermissions method with modified array
*/
}
