import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromApi from './reducers';

export interface ApiState {
    api: fromApi.ApiState;
}

export const reducers: ActionReducerMap<ApiState> = {
    api: fromApi.reducer
};

export const getApiState = createFeatureSelector<ApiState>(
    'api'
);
