import * as fromApi from './reducer';
import * as fromActions from '../actions/pizzas.action';
import { Api } from '../../models/api.model';

describe ('ApiReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            const { initialState } = fromApi;
            const action = {} as any;
            const state = fromApi.reducer(undefined, action);

            expect(state).toBe(initialState);
        });
    });

    describe('placeholder action', () => { // placeholder is a placeholder for an action name
        it('should set X equal to true', () => { // X is a placeholder for a variable name
            const { initialState } = fromApi;
            const action = new fromActions.Action(); // ACTION is a placeholder for a class from actions that corresponds to the describe action
            const state = fromApi.reducer(initialState, action);

            expect(state.variable).toEqual(true);
            expect(state.variable).toEqual(false);
            expect(state.entities).toEqual({});
        });
    });

    describe('placeholder action THAT RETURNS STUFF', () => {
        it('should populate Api array', () => {
            const api: Api[] = [
                {
                    // example data
                },
                {
                    // example data
                }
            ]

            const entities = {
                1: api[0],
                2: api[1]
            };
            const { initialState } = fromApi;
            const action = new fromActions.ACTION(api);
            const state = fromApi.reducer(initialState, action);

            expect(state.action).toEqual(true);
            expect(state.action).toEqual(false);
            expect(state.entities).toEqual(entities);
        });
    });

    describe('placeholder action for FAILURE', () => {
        // the test and stuff
    })
});