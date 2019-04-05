import { ACTION_REQUEST_FETCH_COMIC, ACTION_FETCHING_COMIC, ACTION_FETCHED_COMIC, ACTION_FETCH_FAIL_COMIC } from "./constants";

export const actionRequestFetchComicMarvel = (payload) => ({type: ACTION_REQUEST_FETCH_COMIC, payload});
export const actionFetchingComicMarvel = () => ({type: ACTION_FETCHING_COMIC});
export const actionFetchedComicMarvel = (payload) => ({type: ACTION_FETCHED_COMIC, payload});
export const actionFetchFailComicMarvel = () => ({type: ACTION_FETCH_FAIL_COMIC});
