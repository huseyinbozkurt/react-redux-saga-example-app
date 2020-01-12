import { takeEvery, fork, put } from 'redux-saga/effects';
import actions from '../actions/dataActions';
import Types from '../actions/types'
import data from './data'

// create a generator function
function* fetchData() {
    try {
        yield put(actions.getDataSuccess( {data} ))
    }catch(e) {
        console.log(e);
    }
}
function* watchFetchData() {
    // create watcher of fetchData function
    yield takeEvery(Types.GET_DATA_REQUEST, fetchData);
}

function* selectData() {
    try {
        yield put(actions.setSelection( {data} ))
    }catch(e) {
        console.log(e);
    }
}

function* watchSelectionData() {
    // create watcher of fetchData function
    yield takeEvery(Types.SET_SELECTION_REQUEST, selectData);
}

const DataSagas = [
    fork(watchFetchData),
    fork(watchSelectionData)
];

export default DataSagas;