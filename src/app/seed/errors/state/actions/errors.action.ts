import { Action } from '@ngrx/store';
import { ServerError, ClientError } from '../../models/errors.model';

export const LOG_CLIENT_ERROR = '[errors] Log Client Error';
export const LOG_SERVER_ERROR = '[errors] Log API Error';

export class LogClientError implements Action {
    readonly type = LOG_CLIENT_ERROR;
    constructor(public payload: ClientError) {}
}

export class LogServerError implements Action {
    readonly type = LOG_SERVER_ERROR;
    constructor(public payload: ServerError) {}
}

export type ErrorActions = LogClientError | LogServerError;
