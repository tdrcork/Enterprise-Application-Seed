import * as AuthActions from './auth.actions';

export interface State {
    authenticated:  boolean;
    token: string;
}

const initialState: State = {
    authenticated: false,
    token: null,
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.AUTHENTICATE):
            return {
                ...state,
                authenticated: true,
            };
        case (AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            };
        case (AuthActions.LOGOUT):
            return {
                ...state,
                authenticated: false,
                token: null
            };
        default:
            return state;
    }
}
