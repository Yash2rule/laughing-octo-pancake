import {STORE_VALUE} from '../constants/values';

export const storeValue = (value) => (dispatch) => {
    dispatch({
        type: STORE_VALUE,
        payload:value
    })
}