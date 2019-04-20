(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bundle"],{

/***/ "/+9m":
/*!******************************************************!*\
  !*** ./src/client/modules/Share/scss/reset-css.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/wZp":
/*!*******************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/redux-saga.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
const constants_1 = __webpack_require__(/*! ./constants */ "C8MW");
const actions_1 = __webpack_require__(/*! ./actions */ "lKzL");
const api_1 = __webpack_require__(/*! @comics/module/api */ "2JlY");
function* actionRequetsFetchComicMarvel(action) {
    try {
        yield effects_1.put(actions_1.actionFetchingComicMarvel());
        const id = action.payload;
        const { data } = yield effects_1.call(api_1.default.apiGetComicMarvel, id);
        if (data.code === 200) {
            yield effects_1.put(actions_1.actionFetchedComicMarvel(data.data.results[0]));
        }
        else {
            yield effects_1.put(actions_1.actionFetchFailComicMarvel());
        }
    }
    catch (error) {
        yield effects_1.put(actions_1.actionFetchFailComicMarvel());
    }
}
function* watchRequetsFetchComicMarvel() {
    yield effects_1.takeEvery(constants_1.ACTION_REQUEST_FETCH_COMIC, actionRequetsFetchComicMarvel);
}
exports.default = [
    watchRequetsFetchComicMarvel
];


/***/ }),

/***/ "096M":
/*!*****************************************************************!*\
  !*** ./src/client/modules/Comics/features/search-box/index.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
const redux_connect_1 = __webpack_require__(/*! @comics/module/redux-connect */ "sRBN");
class SearhBoxComics extends React.Component {
    render() {
        const { keySearch } = this.props.comics;
        const onSearchComics = this.props.actionSearchComics;
        return (React.createElement(React.Fragment, null,
            React.createElement("label", { htmlFor: "search-box" }, "Search: "),
            React.createElement("input", { className: "search-box", type: "text", name: "search-box", value: keySearch, onChange: (e) => onSearchComics(e.target.value), placeholder: "Type to find something..." })));
    }
}
exports.default = react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps)(SearhBoxComics);


/***/ }),

/***/ "0h7O":
/*!****************************************************************!*\
  !*** ./src/client/modules/Comics/features/views-box/index.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
const redux_connect_1 = __webpack_require__(/*! @comics/module/redux-connect */ "sRBN");
class SortBoxComics extends React.Component {
    render() {
        const { viewsMethods } = this.props.comics;
        const onViewsComics = this.props.actionViewsComics;
        return (React.createElement("select", { className: "views-box", value: viewsMethods, onChange: (e) => onViewsComics(e.target.value) },
            React.createElement("option", { value: "" }, "Grid Views"),
            React.createElement("option", { value: "list" }, "List Views")));
    }
}
exports.default = react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps)(SortBoxComics);


/***/ }),

/***/ "0rWO":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const ReactDOM = __webpack_require__(/*! react-dom */ "i8i4");
const index_1 = __webpack_require__(/*! @app/index */ "Btig");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
const react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
const store_1 = __webpack_require__(/*! @redux/store */ "374v");
ReactDOM.hydrate(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(index_1.default, null))), document.getElementById('root'));


/***/ }),

/***/ "10Xv":
/*!*************************************************!*\
  !*** ./src/client/modules/Share/utils/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToLocalDate = (date) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
        return "--/--/---";
    }
    const dd = `0${d.getDate()}`.slice(-2);
    const MM = `0${d.getMonth() + 1}`.slice(-2);
    const YYYY = `${d.getFullYear()}`;
    return `${dd}/${MM}/${YYYY}`;
};


/***/ }),

/***/ "1ZFX":
/*!***********************************************!*\
  !*** ./src/client/modules/NotFound/index.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
class default_1 extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "#404 Not Found Page")));
    }
}
exports.default = default_1;


/***/ }),

/***/ "1yTB":
/*!************************************!*\
  !*** ./src/client/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.marvelApiConfigs = {
    ts: 1,
    apikey: '22c3fa0ee15cee85210e42f6bac742f1',
    hash: '4f021a1c41639f51b0a0051806f40e9a',
    domain: 'https://gateway.marvel.com/v1/public'
};


/***/ }),

/***/ "2JlY":
/*!*************************************************!*\
  !*** ./src/client/modules/Comics/module/api.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _api_services_1 = __webpack_require__(/*! @api-services */ "cib4");
const axios_1 = __webpack_require__(/*! axios */ "vDqi");
const ComicsType = "comics";
class ComicsApiServices extends _api_services_1.default {
    constructor() {
        super(ComicsType);
        this.apiGetComicsMarvel = (paramsConfig) => axios_1.default.get(this.api, {
            params: Object.assign({}, paramsConfig, this.config)
        });
        this.apiGetComicMarvel = (comicId) => axios_1.default.get(`${this.api}/${comicId}`, {
            params: Object.assign({}, this.config)
        });
        this.api = this.getApiServices();
        this.config = this.getConfig();
    }
}
exports.default = new ComicsApiServices();


/***/ }),

/***/ "2wv3":
/*!************************************************************!*\
  !*** ./src/client/modules/Comics/module/comics.reducer.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "Cnzs");
const initailStateComics = {
    status: "",
    data: {
        results: [],
        limit: constants_1.LIMIT_PER_PAGE,
        page: 1,
        totalRecords: 0,
        totalPages: 0,
    },
    resultsWithKeySearch: [],
    sortBy: "",
    keySearch: "",
    viewsMethods: "",
    cached: []
};
exports.default = (state = initailStateComics, action) => {
    switch (action.type) {
        case constants_1.ACTION_FETCHING_COMICS: {
            return Object.assign({}, state, { status: "fetching" });
        }
        case constants_1.ACTION_FETCHED_COMICS: {
            const pageLoaded = {
                page: action.payload.page,
                results: action.payload.results
            };
            const pageCached = state.cached.find(pageComics => pageComics.page == pageLoaded.page);
            let newCached = [...state.cached];
            !pageCached ? newCached = [...state.cached, pageLoaded] : false;
            return Object.assign({}, state, { status: "fetched", data: Object.assign({}, action.payload), cached: newCached });
        }
        case constants_1.ACTION_FETCH_FAIL_COMICS: {
            return Object.assign({}, state, { status: "error" });
        }
        case constants_1.ACTION_SORT_COMICS: {
            const sortBy = action.payload;
            const newResultsAfterSort = [...state.data.results].sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }
                return 0;
            });
            return Object.assign({}, state, { data: Object.assign({}, state.data, { results: newResultsAfterSort }), sortBy });
        }
        case constants_1.ACTION_SEARCH_COMICS: {
            const keySearch = action.payload.toLowerCase();
            const newResultsAfterSearch = [...state.data.results].filter(comics => comics.title.toLowerCase().includes(keySearch));
            return Object.assign({}, state, { resultsWithKeySearch: newResultsAfterSearch, keySearch });
        }
        case constants_1.ACTION_CHANGE_VIEWS_COMICS: {
            const viewsMethods = action.payload;
            return Object.assign({}, state, { viewsMethods });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "374v":
/*!***********************************!*\
  !*** ./src/client/redux/store.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "ANjH");
const redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "sINF");
const redux_saga_1 = __webpack_require__(/*! redux-saga */ "rRWa");
const redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "5HXA");
const reducers_1 = __webpack_require__(/*! ./reducers */ "s6fg");
const sagas_1 = __webpack_require__(/*! ./sagas */ "RSCK");
let preloadedState = {};
if (process.env.BROWSER_SIDE) {
    preloadedState = Object.assign({}, window.__PRELOADED_STATE__);
    delete window.__PRELOADED_STATE__;
}
const saga = redux_saga_1.default();
const store = redux_1.createStore(reducers_1.default, preloadedState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, saga)));
saga.run(sagas_1.default);
exports.default = store;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "8oxB")))

/***/ }),

/***/ "6h7V":
/*!*************************************************************!*\
  !*** ./src/client/modules/Comics/features/header/index.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
__webpack_require__(/*! ./module/index.scss */ "r85p");
const search_box_1 = __webpack_require__(/*! @comics/features/search-box */ "096M");
const sort_box_1 = __webpack_require__(/*! @comics/features/sort-box */ "i+Nf");
const views_box_1 = __webpack_require__(/*! @comics/features/views-box */ "0h7O");
class ComicsPageHeader extends React.Component {
    render() {
        return (React.createElement("div", { className: "home-header" },
            React.createElement("div", { className: "home-header-upper" },
                React.createElement("ul", { className: "category" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "VIDEOS")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "CHARACTER")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "COMICS")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "MOVIES")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "TV SHOWS")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "GAME")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" }, "MORE")))),
            React.createElement("div", { className: "home-header-lower" },
                React.createElement("ul", { className: "menu" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" })),
                    React.createElement("li", null,
                        React.createElement(search_box_1.default, null)),
                    React.createElement("li", null,
                        React.createElement(views_box_1.default, null)),
                    React.createElement("li", null,
                        React.createElement(sort_box_1.default, null))))));
    }
}
exports.default = ComicsPageHeader;


/***/ }),

/***/ "7alH":
/*!**************************************************!*\
  !*** ./src/client/modules/Comics/withComics.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const recompose_1 = __webpack_require__(/*! recompose */ "eHHv");
const react_router_1 = __webpack_require__(/*! react-router */ "Ty5D");
const react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
const redux_connect_1 = __webpack_require__(/*! ./module/redux-connect */ "sRBN");
const error_boudary_1 = __webpack_require__(/*! @share/modules/error-boudary */ "uIrM");
const react_spinners_1 = __webpack_require__(/*! react-spinners */ "Nm0s");
__webpack_require__(/*! ./module/index.scss */ "cFIT");
const footer_1 = __webpack_require__(/*! ./features/footer */ "uprG");
const header_1 = __webpack_require__(/*! ./features/header */ "6h7V");
const enhance = WrappedComponent => class extends React.Component {
    constructor() {
        super(...arguments);
        this.onPageChange = (page) => {
            const { cached, data } = this.props.comics;
            const { limit, totalPages, totalRecords } = data;
            const pageCached = cached.find(pageComics => pageComics.page == page);
            if (!!pageCached) {
                const payload = {
                    results: pageCached.results,
                    page,
                    limit,
                    totalPages,
                    totalRecords
                };
                this.props.cachePageComicsMarvel(payload);
            }
            else if (page >= 1 && page <= totalPages) {
                const params = {
                    limit,
                    page
                };
                this.props.fetchComicsMarvel(params);
            }
        };
    }
    componentDidMount() {
        const { cached, data } = this.props.comics;
        const { limit, page } = data;
        const pageCached = cached.find(pageComics => pageComics.page == page);
        if (!pageCached) {
            const params = {
                limit,
                page
            };
            this.props.fetchComicsMarvel(params);
        }
    }
    render() {
        const { status } = this.props.comics;
        let content;
        if (status === "fetched") {
            content = (React.createElement(error_boudary_1.default, null,
                React.createElement(WrappedComponent, Object.assign({ onPageChange: this.onPageChange, onSortComics: this.props.actionSortComics, onSearchComics: this.props.actionSearchComics }, this.props))));
        }
        else if (status === "fetching") {
            content = (React.createElement("div", { className: "spinner" },
                React.createElement(react_spinners_1.BeatLoader, { sizeUnit: "px", size: 15, color: 'rgb(54, 215, 183)', loading: true })));
        }
        return (React.createElement("div", { className: "wrap" },
            React.createElement(header_1.default, null),
            React.createElement("div", { className: "page-comics" }, content),
            React.createElement(footer_1.default, null)));
    }
};
exports.default = recompose_1.compose(react_router_1.withRouter, react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps), enhance);


/***/ }),

/***/ "Btig":
/*!******************************************!*\
  !*** ./src/client/modules/App/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
const react_router_1 = __webpack_require__(/*! react-router */ "Ty5D");
const index_1 = __webpack_require__(/*! @comics/index */ "Kmqr");
const comic_details_1 = __webpack_require__(/*! @comics/features/comic-details */ "GNj+");
const index_2 = __webpack_require__(/*! @not-found/index */ "1ZFX");
__webpack_require__(/*! @share/scss/reset-css.scss */ "/+9m");
class App extends React.Component {
    render() {
        return (React.createElement(react_router_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: index_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/comic/:id", component: comic_details_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/*", component: index_2.default })));
    }
}
exports.default = App;


/***/ }),

/***/ "C8MW":
/*!******************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/constants.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_REQUEST_FETCH_COMIC = "[comic] Request fetch comic marvel";
exports.ACTION_FETCHING_COMIC = "[comic] Fetching comic";
exports.ACTION_FETCHED_COMIC = "[comic] Fetched comic";
exports.ACTION_FETCH_FAIL_COMIC = "[comic] Fetch fail comic";


/***/ }),

/***/ "Cnzs":
/*!*******************************************************!*\
  !*** ./src/client/modules/Comics/module/constants.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_REQUEST_FETCH_COMICS = "[comics] Request fetch comics marvel";
exports.ACTION_FETCHING_COMICS = "[comics] Fetching comics";
exports.ACTION_FETCHED_COMICS = "[comics] Fetched comics";
exports.ACTION_FETCH_FAIL_COMICS = "[comics] Fetch fail comics";
exports.ACTION_SORT_COMICS = "[comics] Sort comics by field";
exports.ACTION_SEARCH_COMICS = "[comics] Search comics by key";
exports.ACTION_CHANGE_VIEWS_COMICS = "[comics] Change method views comics";
exports.LIMIT_PER_PAGE = 12;


/***/ }),

/***/ "GNj+":
/*!********************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/index.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const withComicDetails_1 = __webpack_require__(/*! ./withComicDetails */ "bk04");
const index_1 = __webpack_require__(/*! @share/utils/index */ "10Xv");
class ComicDetails extends React.Component {
    render() {
        const { title, description, thumbnail, creators, dates } = this.props.comic.data;
        const thumbnailUrl = `${thumbnail.path}.${thumbnail.extension}`;
        const published = dates.find(date => date.type === "onsaleDate");
        return (React.createElement("div", { className: "page-comic-block" },
            React.createElement("div", { className: "page-comic-block-details" },
                React.createElement("div", { className: "page-comic-block-details-thumbnail" },
                    React.createElement("img", { src: thumbnailUrl, alt: title })),
                React.createElement("div", { className: "page-comic-block-details-description" },
                    React.createElement("h1", null, title),
                    React.createElement("ul", { className: "creator" },
                        React.createElement("li", null,
                            React.createElement("h5", null, "Published:"),
                            React.createElement("p", null, index_1.convertToLocalDate(published.date))),
                        creators.items.map((creator, index) => React.createElement("li", { key: index },
                            React.createElement("h5", null,
                                creator.role,
                                ":"),
                            React.createElement("p", null, creator.name)))),
                    React.createElement("p", { className: "description" }, description))),
            React.createElement("div", { className: "page-comic-block-purchase" })));
    }
}
exports.default = withComicDetails_1.default(ComicDetails);


/***/ }),

/***/ "Igxp":
/*!********************************************************!*\
  !*** ./src/client/modules/Comics/module/redux-saga.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
const constants_1 = __webpack_require__(/*! ./constants */ "Cnzs");
const actions_1 = __webpack_require__(/*! ./actions */ "f6+o");
const api_1 = __webpack_require__(/*! ./api */ "2JlY");
function* actionRequetsFetchComicsMarvel(action) {
    try {
        yield effects_1.put(actions_1.actionFetchingComicsMarvel());
        const { limit, page } = action.payload;
        const params = {
            limit,
            offset: (page - 1) * limit
        };
        const { data } = yield effects_1.call(api_1.default.apiGetComicsMarvel, params);
        if (data.code === 200) {
            const { total, results, } = data.data;
            const payload = {
                results,
                page,
                limit,
                totalRecords: total,
                totalPages: Math.ceil(total / params.limit)
            };
            yield effects_1.put(actions_1.actionFetchedComicsMarvel(payload));
        }
        else {
            yield effects_1.put(actions_1.actionFetchFailComicsMarvel());
        }
    }
    catch (error) {
        yield effects_1.put(actions_1.actionFetchFailComicsMarvel());
    }
}
function* watchRequetsFetchComicsMarvel() {
    yield effects_1.takeEvery(constants_1.ACTION_REQUEST_FETCH_COMICS, actionRequetsFetchComicsMarvel);
}
exports.default = [
    watchRequetsFetchComicsMarvel
];


/***/ }),

/***/ "Kmqr":
/*!*********************************************!*\
  !*** ./src/client/modules/Comics/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const withComics_1 = __webpack_require__(/*! ./withComics */ "7alH");
const comic_item_1 = __webpack_require__(/*! ./features/comic-item */ "kUgH");
const react_js_pagination_1 = __webpack_require__(/*! react-js-pagination */ "0fKb");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
const RenderComicsItem = (props) => props.comicsList.map(comicItem => React.createElement(comic_item_1.default, { key: comicItem.id, comic: comicItem }));
const RenderComicsItemWithListViews = (props) => (React.createElement("table", { className: "table table-hover" },
    React.createElement("tbody", null,
        React.createElement("tr", null,
            React.createElement("td", null,
                React.createElement("h5", null, "#")),
            React.createElement("td", null,
                React.createElement("h5", null, "Title")),
            React.createElement("td", null,
                React.createElement("h5", null, "Link")),
            React.createElement("td", null,
                React.createElement("h5", null, "Image"))),
        props.comicsList.map((comicItem) => React.createElement("tr", { key: comicItem.id },
            React.createElement("td", null, comicItem.id),
            React.createElement("td", null, comicItem.title),
            React.createElement("td", null,
                React.createElement(react_router_dom_1.Link, { to: `/comic/${comicItem.id}` },
                    "/comic/",
                    comicItem.id)),
            React.createElement("td", null,
                React.createElement("img", { src: `${comicItem.thumbnail.path}.${comicItem.thumbnail.extension}`, alt: "" })))))));
class Comics extends React.Component {
    render() {
        const { results, page, limit, totalRecords, } = this.props.comics.data;
        const { keySearch, viewsMethods, resultsWithKeySearch } = this.props.comics;
        let blockContentItems;
        if (viewsMethods === "list") {
            blockContentItems = (React.createElement("div", { className: "page-comics-block-items-list" }, keySearch.trim() !== "" ?
                React.createElement(RenderComicsItemWithListViews, { comicsList: resultsWithKeySearch }) :
                React.createElement(RenderComicsItemWithListViews, { comicsList: results })));
        }
        else {
            blockContentItems = (React.createElement("div", { className: "page-comics-block-items" }, keySearch.trim() !== "" ?
                React.createElement(RenderComicsItem, { comicsList: resultsWithKeySearch }) :
                React.createElement(RenderComicsItem, { comicsList: results })));
        }
        return (React.createElement("div", { className: "page-comics-block" },
            blockContentItems,
            React.createElement("div", { className: "page-comics-block-pagination" },
                React.createElement(react_js_pagination_1.default, { activePage: page, itemsCountPerPage: limit, totalItemsCount: totalRecords, pageRangeDisplayed: 5, onChange: (page) => this.props.onPageChange(page), innerClass: "pagination", itemClass: "page-item", linkClass: "page-link" }))));
    }
}
exports.default = withComics_1.default(Comics);


/***/ }),

/***/ "L8tp":
/*!**********************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/comic.reducer.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "C8MW");
const initailStateComics = {
    status: "",
    data: {},
    cache: []
};
exports.default = (state = initailStateComics, action) => {
    switch (action.type) {
        case constants_1.ACTION_FETCHING_COMIC: {
            return Object.assign({}, state, { status: "fetching" });
        }
        case constants_1.ACTION_FETCHED_COMIC: {
            const comic = Object.assign({}, action.payload);
            const isComicCached = state.cache.some(comicCached => comicCached.id == comic.id);
            let newCache = [...state.cache];
            !isComicCached ? newCache.push(comic) : false;
            return Object.assign({}, state, { status: "fetched", data: comic, cache: newCache });
        }
        case constants_1.ACTION_FETCH_FAIL_COMIC: {
            return Object.assign({}, state, { status: "error" });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "OUdY":
/*!****************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/index.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Oc24":
/*!***********************************************!*\
  !*** ./src/client/modules sync redux-saga.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Comics/features/comic-details/module/redux-saga.ts": "/wZp",
	"./Comics/module/redux-saga.ts": "Igxp"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "Oc24";

/***/ }),

/***/ "Q8O/":
/*!*****************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/reselect.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! reselect */ "G4qV");
exports.comicSelector = reselect_1.createSelector((state) => state.comic, comicState => comicState);


/***/ }),

/***/ "RSCK":
/*!***********************************!*\
  !*** ./src/client/redux/sagas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = __webpack_require__(/*! redux-saga/effects */ "5rFJ");
const requireModule = __webpack_require__("Oc24"); //extract redux-saga.ts files inside redux folder
let sagas = [];
requireModule.keys().forEach((fileName) => {
    if (requireModule(fileName).default) {
        sagas = [...sagas, ...requireModule(fileName).default];
    }
});
const globalSaga = sagas.map((saga) => effects_1.fork(saga));
function* rootSaga() {
    yield effects_1.all([
        ...globalSaga
    ]);
}
exports.default = rootSaga;


/***/ }),

/***/ "TT5w":
/*!******************************************************!*\
  !*** ./src/client/modules/Comics/module/reselect.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! reselect */ "G4qV");
exports.comicsSelector = reselect_1.createSelector((state) => state.comics, comicsState => comicsState);


/***/ }),

/***/ "XCix":
/*!**********************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/redux-connect.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! ./reselect */ "Q8O/");
const actions_1 = __webpack_require__(/*! ./actions */ "lKzL");
exports.mapStateToProps = state => ({
    comic: reselect_1.comicSelector(state)
});
exports.mapDispatchToProps = {
    fetchComicMarvel: actions_1.actionRequestFetchComicMarvel,
    cacheComicMarvel: actions_1.actionFetchedComicMarvel
};


/***/ }),

/***/ "bk04":
/*!*******************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/withComicDetails.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const header_1 = __webpack_require__(/*! ../header */ "6h7V");
const footer_1 = __webpack_require__(/*! ../footer */ "uprG");
const recompose_1 = __webpack_require__(/*! recompose */ "eHHv");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
const react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
const redux_connect_1 = __webpack_require__(/*! ./module/redux-connect */ "XCix");
__webpack_require__(/*! ./module/index.scss */ "OUdY");
const react_spinners_1 = __webpack_require__(/*! react-spinners */ "Nm0s");
const error_boudary_1 = __webpack_require__(/*! @share/modules/error-boudary */ "uIrM");
const enhance = WrappedComponent => class extends React.Component {
    componentDidMount() {
        const { cache } = this.props.comic;
        const comicId = this.props.match.params.id;
        const comicCacched = cache.find(comic => comic.id == comicId);
        if (!!comicCacched) {
            this.props.cacheComicMarvel(comicCacched);
        }
        else {
            this.props.fetchComicMarvel(comicId);
        }
    }
    render() {
        const { status } = this.props.comic;
        let content;
        if (status === "fetched") {
            content = (React.createElement(error_boudary_1.default, null,
                React.createElement(WrappedComponent, Object.assign({}, this.props))));
        }
        else if (status === "fetching") {
            content = (React.createElement("div", { className: "spinner" },
                React.createElement(react_spinners_1.BeatLoader, { sizeUnit: "px", size: 15, color: 'rgb(54, 215, 183)', loading: true })));
        }
        return (React.createElement("div", { className: "wrap" },
            React.createElement(header_1.default, null),
            React.createElement("div", { className: "page-comic" }, content),
            React.createElement(footer_1.default, null)));
    }
};
exports.default = recompose_1.compose(react_router_dom_1.withRouter, react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps), enhance);


/***/ }),

/***/ "cFIT":
/*!*****************************************************!*\
  !*** ./src/client/modules/Comics/module/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cib4":
/*!*********************************!*\
  !*** ./src/client/api/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _config_1 = __webpack_require__(/*! @config */ "1yTB");
class ApiServices {
    constructor(type) {
        this.getApiServices = () => `${_config_1.marvelApiConfigs.domain}/${this.type}`;
        this.getConfig = () => ({
            ts: _config_1.marvelApiConfigs.ts,
            apikey: _config_1.marvelApiConfigs.apikey,
            hash: _config_1.marvelApiConfigs.hash
        });
        this.type = type;
    }
}
exports.default = ApiServices;


/***/ }),

/***/ "f6+o":
/*!*****************************************************!*\
  !*** ./src/client/modules/Comics/module/actions.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "Cnzs");
exports.actionRequestFetchComicsMarvel = (payload) => ({ type: constants_1.ACTION_REQUEST_FETCH_COMICS, payload });
exports.actionFetchingComicsMarvel = () => ({ type: constants_1.ACTION_FETCHING_COMICS });
exports.actionFetchedComicsMarvel = (payload) => ({ type: constants_1.ACTION_FETCHED_COMICS, payload });
exports.actionFetchFailComicsMarvel = () => ({ type: constants_1.ACTION_FETCH_FAIL_COMICS });
exports.actionSortComicsByField = (payload) => ({ type: constants_1.ACTION_SORT_COMICS, payload });
exports.actionSearchComicsByKey = (payload) => ({ type: constants_1.ACTION_SEARCH_COMICS, payload });
exports.actionViewsComics = (payload) => ({ type: constants_1.ACTION_CHANGE_VIEWS_COMICS, payload });


/***/ }),

/***/ "i+Nf":
/*!***************************************************************!*\
  !*** ./src/client/modules/Comics/features/sort-box/index.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const react_redux_1 = __webpack_require__(/*! react-redux */ "/MKj");
const redux_connect_1 = __webpack_require__(/*! @comics/module/redux-connect */ "sRBN");
class SortBoxComics extends React.Component {
    render() {
        const { sortBy } = this.props.comics;
        const onSortComics = this.props.actionSortComics;
        return (React.createElement("select", { className: "sort-box", value: sortBy, onChange: (e) => onSortComics(e.target.value) },
            React.createElement("option", { value: "id" }, "Sort by"),
            React.createElement("option", { value: "title" }, "Title")));
    }
}
exports.default = react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps)(SortBoxComics);


/***/ }),

/***/ "j+Ot":
/*!*********************************************************************!*\
  !*** ./src/client/modules/Comics/features/footer/module/index.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kUgH":
/*!*****************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-item/index.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "55Ip");
class ComicItem extends React.Component {
    render() {
        const { id, title, thumbnail } = this.props.comic;
        const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
        return (React.createElement("div", { className: "comic-item" },
            React.createElement("div", { className: "comic-item-image" },
                React.createElement(react_router_dom_1.Link, { to: `/comic/${id}` },
                    React.createElement("img", { src: imageSrc, alt: `image ${title}` }))),
            React.createElement("div", { className: "comic-item-text" },
                React.createElement("h5", null, title))));
    }
}
exports.default = ComicItem;


/***/ }),

/***/ "lKzL":
/*!****************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/actions.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ./constants */ "C8MW");
exports.actionRequestFetchComicMarvel = (payload) => ({ type: constants_1.ACTION_REQUEST_FETCH_COMIC, payload });
exports.actionFetchingComicMarvel = () => ({ type: constants_1.ACTION_FETCHING_COMIC });
exports.actionFetchedComicMarvel = (payload) => ({ type: constants_1.ACTION_FETCHED_COMIC, payload });
exports.actionFetchFailComicMarvel = () => ({ type: constants_1.ACTION_FETCH_FAIL_COMIC });


/***/ }),

/***/ "r85p":
/*!*********************************************************************!*\
  !*** ./src/client/modules/Comics/features/header/module/index.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "s6fg":
/*!**************************************!*\
  !*** ./src/client/redux/reducers.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "ANjH");
const lodash_1 = __webpack_require__(/*! lodash */ "LvDl");
const requireModule = __webpack_require__("tsKB"); //extract [reducerName].reducer.ts files inside redux folder
const reducers = {};
requireModule.keys().forEach((fileName) => {
    const reducerName = lodash_1.camelCase(fileName.match(/(\w{1,})(.reducer.ts)/)[1]);
    reducers[reducerName] = requireModule(fileName).default;
});
exports.default = redux_1.combineReducers(Object.assign({}, reducers));


/***/ }),

/***/ "sRBN":
/*!***********************************************************!*\
  !*** ./src/client/modules/Comics/module/redux-connect.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = __webpack_require__(/*! ./reselect */ "TT5w");
const actions_1 = __webpack_require__(/*! ./actions */ "f6+o");
exports.mapStateToProps = state => ({
    comics: reselect_1.comicsSelector(state)
});
exports.mapDispatchToProps = {
    fetchComicsMarvel: actions_1.actionRequestFetchComicsMarvel,
    actionSortComics: actions_1.actionSortComicsByField,
    actionSearchComics: actions_1.actionSearchComicsByKey,
    actionViewsComics: actions_1.actionViewsComics,
    cachePageComicsMarvel: actions_1.actionFetchedComicsMarvel
};


/***/ }),

/***/ "tsKB":
/*!**********************************************!*\
  !*** ./src/client/modules sync \.reducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Comics/features/comic-details/module/comic.reducer.ts": "L8tp",
	"./Comics/module/comics.reducer.ts": "2wv3"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "tsKB";

/***/ }),

/***/ "uIrM":
/*!******************************************************************!*\
  !*** ./src/client/modules/Share/modules/error-boudary/index.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return React.createElement("h1", null, "Something went wrong. Please try again later!");
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundary;


/***/ }),

/***/ "uprG":
/*!*************************************************************!*\
  !*** ./src/client/modules/Comics/features/footer/index.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "q1tI");
__webpack_require__(/*! ./module/index.scss */ "j+Ot");
class ComicsPageFooter extends React.Component {
    render() {
        return (React.createElement("div", { className: "home-footer" },
            React.createElement("p", null, "\u00A9 2019 Copyright: marvel.com")));
    }
}
exports.default = ComicsPageFooter;


/***/ })

},[["0rWO","runtime","vendors"]]]);
//# sourceMappingURL=bundle.js.map