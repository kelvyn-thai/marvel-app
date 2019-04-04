import { ACTION_FETCHING_COMICS, ACTION_FETCHED_COMICS, ACTION_FETCH_FAIL_COMICS } from "./constants";

const initailStateComics = {
    status: "",
    data: {
        results: [],
        offset: 0,
        limit: 0,
        count: 0
    }
}
export default (state = initailStateComics, action) => {
    switch (action.type) {
        case ACTION_FETCHING_COMICS: {
            return {
                ...state,
                status: "fetching"
            }
        }
        case ACTION_FETCHED_COMICS: {
            return {
                ...state,
                status: "fetched",
                data: {
                    ...action.payload
                }
            }
        }
        case ACTION_FETCH_FAIL_COMICS: {
            return {
                ...state,
                status: "error"
            }
        }
        default:
            return state;
    }
}