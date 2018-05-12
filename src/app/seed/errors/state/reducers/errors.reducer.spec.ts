import * as fromErrors from './errors.reducer';
import * as fromActions from '../actions/errors.action';

import { Error, ClientError, ServerError } from '../../models/errors.model';

describe('ErrorsReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialState } = fromErrors;
            const action = {} as any;
            const state = fromErrors.reducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });

    describe('LOG_CLIENT_ERRORS action', () => {
        it('should create a client error in the state', () => {
            const error: ClientError = {
                message: 'This Function Broke',
                page: { userId: 1, feature: 'Errors'},
                function: {
                    name: 'log client errors test',
                    description: 'this functions tests if the reducer works',
                    fileName: 'errors.reducer.spec.ts'
                }
            };

            const action = new fromActions.LogClientError(error);
            const state = fromErrors.reducer(fromErrors.initialState, action);

            expect(state).toEqual(error);

        });
    });

    describe('LOG_SERVER_ERRORS action', () => {
        it('should create a server error in the state', () => {
            const error: ServerError = {
                status: '404',
                message: 'This Function Broke',
                page: { userId: 1, feature: 'Errors'},
                payload: {}
            };

            const action = new fromActions.LogServerError(error);
            const state = fromErrors.reducer(fromErrors.initialState, action);

            expect(state).toEqual(error);

        });
    });


});
