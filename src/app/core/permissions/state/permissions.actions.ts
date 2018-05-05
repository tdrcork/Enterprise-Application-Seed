import { Action } from '@ngrx/store';


export const SET_USER_CLEARANCE = 'SET_USER_CLEARANCE';
export const SET_USER_KEYS = 'SET_USER_KEYS';
export const ADD_USER_KEY = 'ADD_USER_KEY';
export const DELETE_USER_KEY = 'DELETE_USER_KEY';
export const CLEAR_PERMISSIONS = 'CLEAR_PERMISSIONS';

export class SetUserClearance implements Action {
    readonly type = SET_USER_CLEARANCE;
    constructor(public payload: number) {}
}

export class SetUserKeys implements Action {
    readonly type = SET_USER_KEYS;
    constructor(public payload: string[]) {}
}

export class AddUserKey implements Action {
    readonly type = ADD_USER_KEY;
    constructor(public payload: string) {}
}

export class DeleteUserKey implements Action {
    readonly type = DELETE_USER_KEY;
    constructor(public payload: string) {}
}

export class ClearPermissions implements Action {
    readonly type = CLEAR_PERMISSIONS;
}


export type PermissionsActions = SetUserClearance | SetUserKeys | AddUserKey |  DeleteUserKey | ClearPermissions;
