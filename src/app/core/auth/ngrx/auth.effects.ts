import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as AuthActions from './auth.actions';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private router: Router, private amplifyService: AmplifyService) {
        this.amplifyService = amplifyService;
    }


    @Effect()
    authLogin = this.actions$
        .ofType(AuthActions.START_LOGIN)
        .map((action: AuthActions.StartLogin) => {
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
                    type: AuthActions.CONFIRM
                },
                {
                    type: AuthActions.LOGIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });

    @Effect()
    authRegister = this.actions$
        .ofType(AuthActions.START_REGISTRATION)
        .map((action: AuthActions.StartLogin) => {
            return action.payload;
        })
        .switchMap((authData: {username: string, password: string, email: string}) => {
            return fromPromise(this.amplifyService.auth().signUp(authData.username, authData.password));
        })
        .mergeMap(() => {
            return [
                {
                    type: AuthActions.REGISTER
                },

            ];
        });


    @Effect()
    authConfirm = this.actions$
        .ofType(AuthActions.START_CONFIRMATION)
        .map((action: AuthActions.StartConfirmation) => {
            return action.payload;
        })
        .switchMap((authData: {username: string, code: string}) => {
            return fromPromise(this.amplifyService.auth().confirmSignUp(authData.username, authData.code));
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
                    type: AuthActions.CONFIRM
                },
                {
                    type: AuthActions.LOGIN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        });

    @Effect()
    authForgotPassword = this.actions$
        .ofType(AuthActions.START_RESET)
        .map((action: AuthActions.StartReset) => {
            return action.payload;
        })
        .switchMap((authData: {username: string}) => {
            return fromPromise(this.amplifyService.auth().forgotPassword(authData.username));
        })
        .mergeMap(() => {
            return [
                {
                    type: AuthActions.FORGOTTEN_PASSWORD
                },
            ];
        });




    // TODO: SET UP THE REST OF THE METHODS FROM THE SERVICE IN HERE.  

    /* archetecture of effect
        @effect: decorator
        nameOfFunction = this.actions$
        .ofType(Action That is Dispatched)
        .map(The Method for that Action) {
            return action.payload(the payload data was submitted via form data)
        }
        .switchMap(payload/form data from component method that dispatched action) {
            return fromPromise(method that uses the payload data to do shit)
        }
        .mergeMap(() => {
            return [Array of Action Objects]. This sets up the state, I think.  // TODO: FIND OUT FOR SURE
        })
    */

}
