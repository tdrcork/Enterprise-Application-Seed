import * as AuthActions from './auth.actions';
import { Action } from '@ngrx/store';

export interface State {
    authenticated:  boolean;
    token: string;
    registered: boolean;
    mfaEnabled: boolean;
    mfAuthenticated: boolean;
    forgotPassword: boolean;
}

const initialState: State = {
    authenticated: false,
    token: null,
    registered: false,
    mfaEnabled: false,
    mfAuthenticated: false,
    forgotPassword: false
};


export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.REGISTER):
            return {
                ...state,
                registered: true
            }
        case (AuthActions.CONFIRM):
            ...state,
            confirmed: true;
            return state;
        case (AuthActions.LOGIN):
            ...state,
            authenticated: true;
            return state;
        case (AuthActions.LOGOUT):
            ...state,
            token: null,
            confirmed: false,
            registered: false,
            authenticated: false,
            mfAuthenticated: false;
            return state;
        default:
            return state;
    }
}