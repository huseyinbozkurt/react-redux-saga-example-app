import Types from '../actions/types'
// create initial state for reducers
const INIT_STATE = {
    test: "Hello world!"
}

// reducer function to transform state
// reducer function to transform state
export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.GET_DATA_SUCCESS: {
            console.log("redux -> ", action.payload.data)    
            return {
                test: action.payload.data
            }
        }
        default: return state;
    }
}