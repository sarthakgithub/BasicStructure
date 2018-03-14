import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../constants/constants';
import { postLoginInfo, fetchingItems } from '../dataapi/api';

export function* watchLoginInfo(action){
    const loginInfo = yield call(postLoginInfo, action.userInfoDetails);

    const itemsdata = yield call(fetchingItems);
    console.log('Items Data',itemsdata);
    
    yield put({ type: 'LOGIN_STATE', loginInfo});
}

export function* watchLoginInfoSaga(){
    yield takeEvery(actionTypes.USER_INFO, watchLoginInfo);
}

export function* rootSaga() {
 	yield all([watchLoginInfoSaga()]);
}