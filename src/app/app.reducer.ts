import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './core/auth/state/auth.reducers';
import * as fromPermissions from './core/permissions/state/permissions.reducer';

export interface AppState {
  auth: fromAuth.State;
  permissions: fromPermissions.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  permissions: fromPermissions.permissionsReducer
};

export const getPermissionsState = createFeatureSelector<fromPermissions.State>('permission');
export const getClearance = createSelector(getPermissionsState, fromPermissions.clearanceLevel);
export const getListOfKeys = createSelector(getPermissionsState, fromPermissions.listOfKeys);
