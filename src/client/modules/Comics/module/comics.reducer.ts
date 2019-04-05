import { ACTION_FETCHING_COMICS, ACTION_FETCHED_COMICS, ACTION_FETCH_FAIL_COMICS, LIMIT_PER_PAGE, ACTION_SORT_COMICS, ACTION_SEARCH_COMICS } from "./constants";

const initailStateComics = {
    status: "",
    data: {
        results: [],
        limit: LIMIT_PER_PAGE,
        page: 1,
        totalRecords: 0,
        totalPages: 0,
    },
    resultsWithKeySearch: [],
    sortBy: "",
    keySearch: ""
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
        case ACTION_SORT_COMICS: {
            const sortBy: string = action.payload;
            const newResultsAfterSort = [...state.data.results].sort((a, b) => {
                if (a[sortBy] < b[sortBy]) { return -1; }
                if (a[sortBy] > b[sortBy]) { return 1; }
                return 0;
            })
            return {
                ...state,
                data: {
                    ...state.data,
                    results: newResultsAfterSort,
                },
                sortBy
            }
        }
        case ACTION_SEARCH_COMICS: {
            const keySearch = action.payload.toLowerCase();
            const newResultsAfterSearch = [...state.data.results].filter(comics => comics.title.toLowerCase().includes(keySearch));
            return {
                ...state,
                resultsWithKeySearch: newResultsAfterSearch,
                keySearch
            }
        }
        default:
            return state;
    }
}