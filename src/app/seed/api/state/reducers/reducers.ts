import * as fromApi from '../actions/actions';
import { Api } from '../../models/model';

export interface ApiState {
    entities: {[id: number]: Api };
    // variables
}

export const initialState: ApiState = {
    entities: {},
    // variables
}

export function reducer(state = initialState, action: fromApi.ApiAction): ApiState {
    switch (action.type) {
        case fromApi.ACTION: {
            return {
                ...state,
                // re assign variables
            };
        }

        case fromApi.ACTION_THAT_RETURNS_STUFF: {
            const api = action.payload;

            const entities = api.reduce(
                (entities: { [id: number]: Api }, api: Api) => {
                    return {
                        ...entities,
                        [Api.id]: api,
                    };
                },
                {
                    ...state.entities
                }
            );

            return {
                ...state,
                // re assign variables
                entities
            };
        }
    }
}
