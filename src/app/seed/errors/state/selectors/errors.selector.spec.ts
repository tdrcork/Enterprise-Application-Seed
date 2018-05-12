import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { TestBed } from '@angular/core/testing';
import { Error, ServerError, ClientError } from '../../models/errors.model';

import * as fromRoot from '../../../store';
import * as fromReducers from '../reducers/index';
import * as fromActions from '../actions/index';
import * as fromSelectors from '../selectors/errors.selector';

describe('Errors Selector', () => {
    let store: Store<fromReducers.AppState>;

    const serverError: ServerError = {
        status: '404 Not Found',
        message: 'there is an issue',
        page: {
            
        }
    }
})
