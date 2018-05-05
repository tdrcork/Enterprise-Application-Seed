import { Action } from '@ngrx/store';

export const START_LOGIN = 'START_LOGIN'; // effect
export const START_REGISTER = 'START_REGISTER'; // effect

export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_TOKEN = 'SET_TOKEN';

export const LOGOUT = 'LOGOUT';

export class StartLogin implements Action {
    readonly type = START_LOGIN;
    constructor(public payload: {username: string, password: string}) {}
}

export class StartRegister implements Action {
    readonly type = START_REGISTER;
    constructor(public payload: {username: string, password: string, attributes: object}) {}
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: string) {}
}

export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export type AuthActions =
  Authenticate
| Logout
| SetToken
| StartLogin
| StartRegister;




/*
Description of Full User Flow:

FIRST: REGISTERING A USER
1:  User navigates to Sign Up Page
2:  User Types in Email, Username, and Password
3:  User Submits form
4:  Data is sent to AWS Cognito and registers a user
5:  A user is redirected to a page that tells them to check email for credentials and gives forms for them
6:  A user adds their credentials and submits
7:  User is confirmed, User is Authenticated
8:  User is redirected to home page
9:  Navigation is changed
10:  token is placed in state db
OPTIONS:  user can resend confirmation email

SECOND:  USER LOGGING IN
1:  User navigates to login Page
2:  User types in email and password
3:  user submits form
4:  Data is sent and verified by aws cognito
5:  User is authenticated
6:  User Token is Saved locally
7:  User is redirected to home page
8:  Navigation is changed
OPTIONS:  forgot password


THIRD:  User Logging Out
1:  User clicks 'logout' button on nav bar
2:  user is set to not authenticated
3:  token is deleted

FOURTH: User Forgets Password
1:  User clicks forgot password on signin page
2:  User is redirected to Forgot password page
3:  User types in required info and submits
4:  User goes to email and clicks email link
5:  User types in new password
6:  password is submitted and user is logged in

Fifth:  User wants MFA
1:  User Checks that they want to use MFA
2:  After logging in, user is sent email with more creds
3:  User is redirected to form requiring those creds
4:  user is logged in after submitting creds


*/