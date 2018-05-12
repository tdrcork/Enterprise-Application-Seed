import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromApi from '../reducers/reducers';

import { Api } from '../../models/api.model';

export const getApiState = createSelector(
    fromFeature.getApiState,
    (state: fromFeature.ApiState) => state.api
);

export const getApiEntities = createSelector(
    getApiState,
    fromApi.getApiEntities
);

export const getSelectedApi = createSelector(
    getApiEntities,
    fromRoot.getRouterState,
    (entities, router): Api => {
        return router.state && entities[router.state.params.apiId];
    }
);

export const getAllApi = createSelector(getApiEntites, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
})

export const getVariable = createSelector(
    getApiState,
    fromApi.variable
)