import Types from './types';

const actions = {
    // function that returns an object literal 
    getDataRequest: () => ({
        type: Types.GET_DATA_REQUEST
    }),
    // key: payload will contain result of the api call
    getDataSuccess: ({data}) => ({
        type: Types.GET_DATA_SUCCESS,
        payload: { data }
    }),
    setSelection: ({data}) => ({
        type: Types.SET_SELECTION_SUCCESS,
        payload: { data }
    })
}

export const setSelection = actions.setSelection
export const getDataRequest = actions.getDataRequest
export const getDataSuccess = actions.getDataSuccess
export default actions;