import Types from '../actions/types'
// create initial state for reducers
const INIT_STATE = {
    test: "Hello world!",
    selection: []
}

// reducer function to transform state
// reducer function to transform state
export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.GET_DATA_SUCCESS: {
            console.log("redux -> ", action.payload.data)    
            return {
                ...state,
                test: action.payload.data
            }
        }
        case Types.SET_SELECTION_SUCCESS: {
            console.log("redux -> ", action.payload.data)    
            return {
                ...state,
                selection: action.payload.data
            }
        }
        default: return {...state };
    }
}