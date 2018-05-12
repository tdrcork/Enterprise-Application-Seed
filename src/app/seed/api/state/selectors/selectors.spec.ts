import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { TestBed } from '@angular/core/testing';
import { Api } from '../../models/api.model';

import * as fromRoot from '../../../store';
import * as fromReducers from '../reducers/index';
import * as fromActions from '../actions/index';
import * as fromSelectors from '../selectors/selectors';

describe('Api Selector', () => {
    let store: Store<fromReducers.ApiState>;

    const api1: Api = {
        // data
    };

    const api2: Api {
        // data
    };

    const api3: Api {
        // data
    };

    const api: Api[] = [api1, api2, api3];

    const entities = {
        1: api[0],
        2: api[1],
        3: api[2]
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    ...fromRoot.reducers,
                    api: combineReducers(fromReducers.reducers)
                })
            ]
        });

        store = TestBed.get(store);
    });

    describe('getApiState', () => {
        it('should return state of api store slice', () => {
            let result;

            store
                .select(fromSelectors.getApiState)
                .subscribe(value => (result = value));

            expect(result).toEqual({
                entities: {},
                // variables to re assign
            });

            store.dispatch(new fromActions.ACTION_THAT_RETURNS_STUFF(api));

            expect(result).toEqual({
                entities,
                // re assigned variables
            });
        });
    });

    describe('getApiEntties', () => {
        it('should return api as entities', () => {
            let result;

            store
                .select(fromSelectors.getPizzasEntities)
                .subscribe(value => (result = value));

            expect(result).toEqual({});

            store.dispatch(new fromActions.ACTION_THAT_RETURNS_STUFF(api));

            expect(result).toEqual(entities);
        });
    });

    describe('getSelectedApi', () => {
        it('should return a single value from the full array as an entity', () => {
            let result;
            let params;

            store.dispatch(new fromActions.ACTION_THAT_RETURNS_STUFF(api));

            store.dispatch({
                type: 'ROUTER_NAVIGATION',
                payload: {
                    routerState: {
                        url: '/THE URL',
                        queryParams: {},
                        params: { apiId: '2'},
                    },
                    event: {},
                },
            });

            store
                .select(fromRoot.getRouterState)
                .subscribe(routerState => (params = routerState.state.params));

            expect(params).toEqual({ apiId: '2' });

            store
                .select(fromSelectors.getSelectedApi)
                .subscribe(selectedApi => (result = selectedApi));

            expect(result).toEqual(entities[2]);
        });
    });
});

