import { ActionReducerMap } from '@ngrx/store';
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
