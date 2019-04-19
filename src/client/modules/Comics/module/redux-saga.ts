import { call, put, takeEvery } from "redux-saga/effects";
import { ACTION_REQUEST_FETCH_COMICS } from "./constants";
import { actionFetchingComicsMarvel, actionFetchedComicsMarvel, actionFetchFailComicsMarvel } from "./actions";
import ComicsApi from "./api";

function* actionRequetsFetchComicsMarvel(action) {
    try {
        yield put(actionFetchingComicsMarvel());
        const { limit, page} = action.payload;
        const params = {
            limit,
            offset: (page - 1) * limit
        }
        const { data } = yield call(ComicsApi.apiGetComicsMarvel, params);
        if (data.code === 200) {
            const {
                total,
                results,
            } = data.data;
            const payload = {
                results,
                page,
                limit,
                totalRecords: total,
                totalPages: Math.ceil(total / params.limit)
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