import { ACTION_FETCHING_COMIC, ACTION_FETCHED_COMIC, ACTION_FETCH_FAIL_COMIC } from "./constants";

const initailStateComics = {
    status: "",
    data: {
    },
    cache: []
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
            const comic = {...action.payload};
            const isComicCached = state.cache.some(comicCached => comicCached.id == comic.id);
            let newCache = [...state.cache];
            !isComicCached ? newCache.push(comic) : false;
            return {
                ...state,
                status: "fetched",
                data: comic,
                cache: newCache
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