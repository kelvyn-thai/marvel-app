import { call, put, takeEvery } from "redux-saga/effects";
import { ACTION_REQUEST_FETCH_COMIC } from "./constants";
import { actionFetchingComicMarvel, actionFetchedComicMarvel, actionFetchFailComicMarvel } from "./actions";
import ComicsApi from "@comics/module/api";

function* actionRequetsFetchComicMarvel(action) {
    try {
        yield put(actionFetchingComicMarvel());
        const id = action.payload;
        const { data } = yield call(ComicsApi.apiGetComicMarvel, id);
        if (data.code === 200) {
            yield put(actionFetchedComicMarvel(data.data.results[0]));
        }
        else {
            yield put(actionFetchFailComicMarvel());
        }

    } catch (error) {
        yield put(actionFetchFailComicMarvel());
    }
}

function* watchRequetsFetchComicMarvel() {
    yield takeEvery(ACTION_REQUEST_FETCH_COMIC, actionRequetsFetchComicMarvel)
}


export default [
    watchRequetsFetchComicMarvel
]