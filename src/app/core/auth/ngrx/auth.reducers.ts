import * as AuthActions from './auth.actions';

export interface State {
    registered: boolean;
    confirmed: boolean;
    authenticated:  boolean;
    forgotPassword: boolean;
    token: string;
}

const initialState: State = {
    registered: false,
    confirmed: false,
    authenticated: false,
    forgotPassword: false,
    token: null,
};


export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.REGISTER):
            return {
                ...state,
                registered: true
            };
        case (AuthActions.CONFIRM):
            return {
                ...state,
                confirmed: true
            };
        case (AuthActions.LOGIN):
            return {
                ...state,
                authenticated: true,
                forgotPassword: false
            };
        case (AuthActions.LOGOUT):
            return {
                ...state,
                token: null,
                confirmed: false,
                registered: false,
                authenticated: false,
            };
        case (AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            };
        case (AuthActions.FORGOTTEN_PASSWORD):
            return {
                ...state,
                forgotPassword: true
            };
        default:
            return state;
    }
}
