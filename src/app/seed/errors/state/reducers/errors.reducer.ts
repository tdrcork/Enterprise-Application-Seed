import * as fromErrors from '../actions/errors.actions';
import { ServerError, ClientError } from '../../models/errors.model';

export interface ErrorState {
    message: string;
    clientError: ClientError | null;
    serverError: ServerError | null;
}

export const initialState: ErrorState = {
    message: 'No Current Error',
    clientError: null,
    serverError: null,
};

export function reducer(state = initialState, action: fromErrors.ErrorActions): ErrorState {
    switch (action.type) {
        case fromErrors.LOG_CLIENT_ERROR: {
            return {
                ...state,
                message: action.payload.message,
                clientError: action.payload
            };
        }

        case fromErrors.LOG_SERVER_ERROR: {
            return {
                ...state,
                message: action.payload.message,
                serverError: action.payload
            };
        }
    }

    return state;
}
