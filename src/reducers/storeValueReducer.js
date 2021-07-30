import {STORE_VALUE} from '../constants/values';

export const storeValueReducer = (state = {},action) => {
    switch (action.type) {
        case STORE_VALUE:
            return {
                ...state,
                value: action.payload,
            }
        default:
            return state;
    }
}