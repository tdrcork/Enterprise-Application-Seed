import * as PermissionsActions from './permissions.actions';

export interface State {
    clearance:  number;
    keys: string[];
}

const initialState: State = {
    clearance: 0,
    keys: [],
};

export function permissionsReducer(state = initialState, action: PermissionsActions.PermissionsActions) {
    switch (action.type) {
        case (PermissionsActions.SET_USER_KEYS):
            return {
                ...state,
                keys: action.payload
            };
        case (PermissionsActions.SET_USER_CLEARANCE):
            return {
                ...state,
                clearance: action.payload
            };
        default:
            return state;
    }
}

export const clearanceLevel = (state: State) => state.clearance;
export const listOfKeys = (state: State) => state.keys;
