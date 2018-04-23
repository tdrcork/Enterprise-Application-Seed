import { Action } from '@ngrx/store';

/* Creating a New User */
export const START_REGISTRATION = 'START_REGISTRATION'; // effect
export const START_CONFIRMATION = 'START_CONFIRMATION'; // effect
export const REGISTER = 'REGISTER';
export const CONFIRM = 'CONFIRM';

/* Logging In/Out Current User */
export const START_LOGIN = 'START_LOGIN'; // effect
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/* MultiFactor Authentication */
export const START_MFA_LOGIN = 'START_MFA_LOGIN'; // effect
export const CHECK_ENABLE_MFA = 'CHECK_ENABLE_MFA';
export const MFA_LOGIN = 'MFA_LOGIN';

/* Password reset/forgotten/change */
export const START_RESET = 'START_RESET';
export const FORGOTTEN_PASSWORD = 'FORGOTTEN_PASSWORD';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

/* Token for auth */
export const SET_TOKEN = 'SET_TOKEN';


/* Creating a New User */
export class StartRegistration implements Action {
    readonly type = START_REGISTRATION;
    constructor(public payload: {username: string, password: string, email: string}) {}
}

export class StartConfirmation implements Action {
    readonly type = START_CONFIRMATION;
    constructor(public payload: {username: string, code: string}) {}
}

export class StartReset implements Action {
    readonly type = START_RESET;
    constructor(public payload: {username: string}) {}
}

export class Register implements Action {
    readonly type = REGISTER;
}

export class Confirm implements Action {
    readonly type = CONFIRM;
}

/* Extra User Actions */
export class ForgottenPassword implements Action {
    readonly type = FORGOTTEN_PASSWORD;
}


/* Login/Logout */
export class StartLogin implements Action {
    readonly type = START_LOGIN;
    constructor(public payload: {email: string, password: string}) {}
}

export class Login implements Action {
    readonly type = LOGIN;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}



/* MultiFactor Authentication */
export class StartMFALogin implements Action {
    readonly type = START_MFA_LOGIN;
    constructor(public payload: {code: string, confirm: string}) {}
}
export class CheckEnableMFA implements Action {
    readonly type = CHECK_ENABLE_MFA;
}
export class MFASignin implements Action {
    readonly type = MFA_LOGIN;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: string) {}
}

export type AuthActions = Register |
                          Confirm |
                          Login |
                          Logout |
                          CheckEnableMFA |
                          MFASignin |
                          SetToken |
                          StartLogin |
                          StartConfirmation |
                          StartRegistration |
                          StartMFALogin |
                          ForgottenPassword;



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