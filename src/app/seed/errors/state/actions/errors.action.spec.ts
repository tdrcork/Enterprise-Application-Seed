import * as fromErrors from './errors.action';
import { ClientError, ServerError } from '../../models/errors.model';


describe('Errors Actions', () => {
    describe('LogClientError Action', () => {
        it('should create an action', () => {
            const payload: ClientError = {
                message: 'This is a Test',
                page: {
                    userId: 1,
                    feature: 'errors'
                },
                function: {
                    name: 'Log Client Error',
                    description: 'This should Log a Client Error',
                    fileName: 'errors.actions.spec.ts'
                }
            };

            const action = new fromErrors.LogClientError(payload);
            expect({ ...action }).toEqual({ type: fromErrors.LOG_CLIENT_ERROR });
        });
    });

    describe('LogServerError Action', () => {
        it('should create an action', () => {
            const payload: ServerError = {
                status: '404',
                message: 'This is a Test',
                page: {
                    userId: 1,
                    feature: 'errors'
                },
                payload: {}
            };

            const action = new fromErrors.LogServerError(payload);
            expect({ ...action }).toEqual({ type: fromErrors.LOG_SERVER_ERROR });
        });
    });
})