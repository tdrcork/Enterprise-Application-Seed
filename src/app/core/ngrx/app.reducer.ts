import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUI from '../shared/ngrx/ui.reducer';
import * as fromAuth from '../auth/ngrx/auth.reducers';

export interface AppState {
  auth: fromAuth.State;
  ui: fromUI.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  ui: fromUI.uiReducer
};

export const getUIState = createFeatureSelector<fromUI.State>('ui');
export const getIsLoading = createSelector(getUIState, fromUI.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);
export const getForgotPassword = createSelector(getAuthState, fromAuth.getForgotPassword);
export const getEmailSent = createSelector(getAuthState, fromAuth.getEmailSent);
