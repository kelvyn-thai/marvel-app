import { call, put, takeEvery } from "redux-saga/effects";
import { ACTION_REQUEST_FETCH_COMICS } from "./constants";
import { actionFetchingComicsMarvel, actionFetchedComicsMarvel, actionFetchFailComicsMarvel } from "./actions";
import ComicsApi from "./api";

function* actionRequetsFetchComicsMarvel(action) {
    try {
        yield put(actionFetchingComicsMarvel());
        const params = action.payload;
        const { data } = yield call(ComicsApi.apiGetComicsMarvel, params);
        if (data.code === 200) {
            const {
                total,
                limit,
                results,
                count
            } = data.data;
            const payload = {
                count,
                limit,
                results,
                offset: params.offset,
                total,
            }
            yield put(actionFetchedComicsMarvel(payload));
        }
        else {
            yield put(actionFetchFailComicsMarvel());
        }

    } catch (error) {
        yield put(actionFetchFailComicsMarvel());
    }
}

function* watchRequetsFetchComicsMarvel() {
    yield takeEvery(ACTION_REQUEST_FETCH_COMICS, actionRequetsFetchComicsMarvel)
}


export default [
    watchRequetsFetchComicsMarvel
]