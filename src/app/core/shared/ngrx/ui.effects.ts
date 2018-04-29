/* import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as AuthActions from './auth.actions';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { AmplifyService } from 'aws-amplify-angular';
import * as fromUI from '../../shared/ngrx/ui.reducer';
import * as UIActions from '../../shared/ngrx/ui.actions';


@Injectable()
export class UIEffects {

    constructor(private actions$: Actions, private router: Router) {
    }


    @Effect()
    authLogin = this.actions$
        .ofType(AuthActions.START_LOADING)
        .map((action: AuthActions.StartLoading) => {
            return action.payload;
        })
        .switchMap((authData: {email: string, password: string}) => {
            return fromPromise(this.amplifyService.auth().signIn(authData.email, authData.password));
        })
        .switchMap(() => {
            return fromPromise(this.amplifyService.auth().currentAuthenticatedUser());
        })
        .mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.REGISTER
                },
                {
                    type: AuthActions.CONFIRM */