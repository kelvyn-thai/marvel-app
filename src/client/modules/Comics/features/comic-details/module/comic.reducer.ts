import { ACTION_FETCHING_COMIC, ACTION_FETCHED_COMIC, ACTION_FETCH_FAIL_COMIC } from "./constants";

const initailStateComics = {
    status: "",
    data: {
    },
}
export default (state = initailStateComics, action) => {
    switch (action.type) {
        case ACTION_FETCHING_COMIC: {
            return {
                ...state,
                status: "fetching"
            }
        }
        case ACTION_FETCHED_COMIC: {
            return {
                ...state,
                status: "fetched",
                data: {
                    ...action.payload
                }
            }
        }
        case ACTION_FETCH_FAIL_COMIC: {
            return {
                ...state,
                status: "error"
            }
        }
        default:
            return state;
    }
}