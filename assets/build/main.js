(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/+9m":function(e,t,c){var o=c("xmrc");"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};c("aET+")(o,a);o.locals&&(e.exports=o.locals)},"/wZp":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("5rFJ"),a=c("C8MW"),i=c("lKzL"),n=c("2JlY");function*s(e){try{yield o.put(i.actionFetchingComicMarvel());const t=e.payload,{data:c}=yield o.call(n.default.apiGetComicMarvel,t);200===c.code?yield o.put(i.actionFetchedComicMarvel(c.data.results[0])):yield o.put(i.actionFetchFailComicMarvel())}catch(e){yield o.put(i.actionFetchFailComicMarvel())}}t.default=[function*(){yield o.takeEvery(a.ACTION_REQUEST_FETCH_COMIC,s)}]},0:function(e,t,c){e.exports=c("0rWO")},"096M":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("/MKj"),i=c("sRBN");t.default=a.connect(i.mapStateToProps,i.mapDispatchToProps)(class extends o.Component{render(){const{keySearch:e}=this.props.comics,t=this.props.actionSearchComics;return o.createElement(o.Fragment,null,o.createElement("label",{htmlFor:"search-box"},"Search: "),o.createElement("input",{className:"search-box",type:"text",name:"search-box",value:e,onChange:e=>t(e.target.value),placeholder:"Type to find something..."}))}})},"0h7O":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("/MKj"),i=c("sRBN");t.default=a.connect(i.mapStateToProps,i.mapDispatchToProps)(class extends o.Component{render(){const{viewsMethods:e}=this.props.comics,t=this.props.actionViewsComics;return o.createElement("select",{className:"views-box",value:e,onChange:e=>t(e.target.value)},o.createElement("option",{value:""},"Grid Views"),o.createElement("option",{value:"list"},"List Views"))}})},"0rWO":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("i8i4"),i=c("Btig"),n=c("55Ip"),s=c("/MKj"),l=c("374v");a.render(o.createElement(s.Provider,{store:l.default},o.createElement(n.HashRouter,null,o.createElement(i.default,null))),document.getElementById("root"))},"10Xv":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertToLocalDate=(e=>{const t=new Date(e);return isNaN(t.getTime())?"--/--/---":`${`0${t.getDate()}`.slice(-2)}/${`0${t.getMonth()+1}`.slice(-2)}/${`${t.getFullYear()}`}`})},"1ZFX":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI");t.default=class extends o.Component{render(){return o.createElement("div",null,o.createElement("h1",null,"#404 Not Found Page"))}}},"1yTB":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.marvelApiConfigs={ts:1,apikey:"22c3fa0ee15cee85210e42f6bac742f1",hash:"4f021a1c41639f51b0a0051806f40e9a",domain:"https://gateway.marvel.com/v1/public"}},"2JlY":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("cib4"),a=c("vDqi"),i="comics";t.default=new class extends o.default{constructor(){super(i),this.apiGetComicsMarvel=(e=>a.default.get(this.api,{params:Object.assign({},e,this.config)})),this.apiGetComicMarvel=(e=>a.default.get(`${this.api}/${e}`,{params:Object.assign({},this.config)})),this.api=this.getApiServices(),this.config=this.getConfig()}}},"2wv3":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("Cnzs"),a={status:"",data:{results:[],limit:o.LIMIT_PER_PAGE,page:1,totalRecords:0,totalPages:0},resultsWithKeySearch:[],sortBy:"",keySearch:"",viewsMethods:"",cached:[]};t.default=((e=a,t)=>{switch(t.type){case o.ACTION_FETCHING_COMICS:return Object.assign({},e,{status:"fetching"});case o.ACTION_FETCHED_COMICS:{const c={page:t.payload.page,results:t.payload.results},o=e.cached.find(e=>e.page==c.page);let a=[...e.cached];return!o&&(a=[...e.cached,c]),Object.assign({},e,{status:"fetched",data:Object.assign({},t.payload),cached:a})}case o.ACTION_FETCH_FAIL_COMICS:return Object.assign({},e,{status:"error"});case o.ACTION_SORT_COMICS:{const c=t.payload,o=[...e.data.results].sort((e,t)=>e[c]<t[c]?-1:e[c]>t[c]?1:0);return Object.assign({},e,{data:Object.assign({},e.data,{results:o}),sortBy:c})}case o.ACTION_SEARCH_COMICS:{const c=t.payload.toLowerCase(),o=[...e.data.results].filter(e=>e.title.toLowerCase().includes(c));return Object.assign({},e,{resultsWithKeySearch:o,keySearch:c})}case o.ACTION_CHANGE_VIEWS_COMICS:{const c=t.payload;return Object.assign({},e,{viewsMethods:c})}default:return e}})},"374v":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("ANjH"),a=c("sINF"),i=c("rRWa"),n=c("5HXA"),s=c("s6fg"),l=c("RSCK"),r=i.default(),m=o.createStore(s.default,n.composeWithDevTools(o.applyMiddleware(a.default,r)));r.run(l.default),t.default=m},"6h7V":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI");c("r85p");const a=c("096M"),i=c("i+Nf"),n=c("0h7O");t.default=class extends o.Component{render(){return o.createElement("div",{className:"home-header"},o.createElement("div",{className:"home-header-upper"},o.createElement("ul",{className:"category"},o.createElement("li",null,o.createElement("a",{href:"#"},"VIDEOS")),o.createElement("li",null,o.createElement("a",{href:"#"},"CHARACTER")),o.createElement("li",null,o.createElement("a",{href:"#"},"COMICS")),o.createElement("li",null,o.createElement("a",{href:"#"},"MOVIES")),o.createElement("li",null,o.createElement("a",{href:"#"},"TV SHOWS")),o.createElement("li",null,o.createElement("a",{href:"#"},"GAME")),o.createElement("li",null,o.createElement("a",{href:"#"},"MORE")))),o.createElement("div",{className:"home-header-lower"},o.createElement("ul",{className:"menu"},o.createElement("li",null,o.createElement("a",{href:"#"})),o.createElement("li",null,o.createElement(a.default,null)),o.createElement("li",null,o.createElement(n.default,null)),o.createElement("li",null,o.createElement(i.default,null)))))}}},"7alH":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("eHHv"),i=c("Ty5D"),n=c("/MKj"),s=c("sRBN"),l=c("uIrM"),r=c("Nm0s");c("cFIT");const m=c("uprG"),p=c("6h7V");t.default=a.compose(i.withRouter,n.connect(s.mapStateToProps,s.mapDispatchToProps),e=>(class extends o.Component{constructor(){super(...arguments),this.onPageChange=(e=>{const{cached:t,data:c}=this.props.comics,{limit:o,totalPages:a,totalRecords:i}=c,n=t.find(t=>t.page==e);if(n){const t={results:n.results,page:e,limit:o,totalPages:a,totalRecords:i};this.props.cachePageComicsMarvel(t)}else if(e>=1&&e<=a){const t={limit:o,page:e};this.props.fetchComicsMarvel(t)}})}componentDidMount(){const{cached:e,data:t}=this.props.comics,{limit:c,page:o}=t;if(!e.find(e=>e.page==o)){const e={limit:c,page:o};this.props.fetchComicsMarvel(e)}}render(){const{status:t}=this.props.comics;let c;return"fetched"===t?c=o.createElement(l.default,null,o.createElement(e,Object.assign({onPageChange:this.onPageChange,onSortComics:this.props.actionSortComics,onSearchComics:this.props.actionSearchComics},this.props))):"fetching"===t&&(c=o.createElement("div",{className:"spinner"},o.createElement(r.BeatLoader,{sizeUnit:"px",size:15,color:"rgb(54, 215, 183)",loading:!0}))),o.createElement("div",{className:"wrap"},o.createElement(p.default,null),o.createElement("div",{className:"page-comics"},c),o.createElement(m.default,null))}}))},AksK:function(e,t,c){(e.exports=c("JPst")(!1)).push([e.i,".home-header {\n  background-color: #393939; }\n  .home-header .home-header-upper {\n    margin-bottom: 5px; }\n    .home-header .home-header-upper .category {\n      display: flex;\n      justify-content: center; }\n      .home-header .home-header-upper .category li a {\n        padding: 10px;\n        display: block;\n        font-size: 13px;\n        color: #fff;\n        font-weight: bold;\n        border-bottom: solid transparent 2px;\n        transition: 0.5s all; }\n        .home-header .home-header-upper .category li a:hover {\n          border-bottom: solid red 2px;\n          transition: 0.5s all; }\n  .home-header .home-header-lower .menu {\n    display: flex;\n    justify-content: center;\n    color: #fff; }\n    .home-header .home-header-lower .menu li {\n      height: 30px;\n      margin-right: 10px;\n      margin-bottom: 5px; }\n      .home-header .home-header-lower .menu li .search-box {\n        height: 100%;\n        border: 0;\n        border-radius: 5px;\n        margin-left: 5px;\n        color: #000; }\n      .home-header .home-header-lower .menu li .sort-box {\n        height: 100%;\n        background-color: #6c757d;\n        border: 1px solid transparent;\n        border-radius: 5px;\n        font-weight: bold; }\n        .home-header .home-header-lower .menu li .sort-box option {\n          background-color: #fff;\n          color: #000; }\n      .home-header .home-header-lower .menu li .views-box {\n        height: 100%;\n        background-color: #6c757d;\n        border: 1px solid transparent;\n        border-radius: 5px;\n        font-weight: bold; }\n        .home-header .home-header-lower .menu li .views-box option {\n          background-color: #fff;\n          color: #000; }\n      .home-header .home-header-lower .menu li a {\n        display: block; }\n        .home-header .home-header-lower .menu li a:hover {\n          background-color: #151515; }\n\n@media screen and (max-width: 1024px) {\n  .home-header {\n    max-width: 1024px; } }\n\n@media screen and (max-width: 768px) {\n  .home-header {\n    max-width: 768px; } }\n\n@media screen and (max-width: 414px) {\n  .home-header {\n    max-width: 414px; }\n    .home-header .home-header-upper .category li a {\n      font-size: 8px; }\n    .home-header .home-header-lower {\n      font-size: 10px; } }\n\n@media screen and (max-width: 375px) {\n  .home-header {\n    max-width: 375px; } }\n\n@media screen and (max-width: 320px) {\n  .home-header {\n    max-width: 320px; }\n    .home-header .home-header-upper .category li a {\n      font-size: 6px; }\n    .home-header .home-header-lower {\n      font-size: 9px; } }\n",""])},Btig:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("55Ip"),i=c("Ty5D"),n=c("Kmqr"),s=c("GNj+"),l=c("1ZFX");c("q4sD"),c("/+9m");t.default=class extends o.Component{render(){return o.createElement(i.Switch,null,o.createElement(a.Route,{exact:!0,path:"/",component:n.default}),o.createElement(a.Route,{path:"/comic/:id",component:s.default}),o.createElement(a.Route,{exact:!0,path:"/*",component:l.default}))}}},C8MW:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ACTION_REQUEST_FETCH_COMIC="[comic] Request fetch comic marvel",t.ACTION_FETCHING_COMIC="[comic] Fetching comic",t.ACTION_FETCHED_COMIC="[comic] Fetched comic",t.ACTION_FETCH_FAIL_COMIC="[comic] Fetch fail comic"},Cnzs:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ACTION_REQUEST_FETCH_COMICS="[comics] Request fetch comics marvel",t.ACTION_FETCHING_COMICS="[comics] Fetching comics",t.ACTION_FETCHED_COMICS="[comics] Fetched comics",t.ACTION_FETCH_FAIL_COMICS="[comics] Fetch fail comics",t.ACTION_SORT_COMICS="[comics] Sort comics by field",t.ACTION_SEARCH_COMICS="[comics] Search comics by key",t.ACTION_CHANGE_VIEWS_COMICS="[comics] Change method views comics",t.LIMIT_PER_PAGE=12},"GNj+":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("bk04"),i=c("10Xv");t.default=a.default(class extends o.Component{render(){const{title:e,description:t,thumbnail:c,creators:a,dates:n}=this.props.comic.data,s=`${c.path}.${c.extension}`,l=n.find(e=>"onsaleDate"===e.type);return o.createElement("div",{className:"page-comic-block"},o.createElement("div",{className:"page-comic-block-details"},o.createElement("div",{className:"page-comic-block-details-thumbnail"},o.createElement("img",{src:s,alt:e})),o.createElement("div",{className:"page-comic-block-details-description"},o.createElement("h1",null,e),o.createElement("ul",{className:"creator"},o.createElement("li",null,o.createElement("h5",null,"Published:"),o.createElement("p",null,i.convertToLocalDate(l.date))),a.items.map((e,t)=>o.createElement("li",{key:t},o.createElement("h5",null,e.role,":"),o.createElement("p",null,e.name)))),o.createElement("p",{className:"description"},t))),o.createElement("div",{className:"page-comic-block-purchase"}))}})},Igxp:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("5rFJ"),a=c("Cnzs"),i=c("f6+o"),n=c("2JlY");function*s(e){try{yield o.put(i.actionFetchingComicsMarvel());const{limit:t,page:c}=e.payload,a={limit:t,offset:(c-1)*t},{data:s}=yield o.call(n.default.apiGetComicsMarvel,a);if(200===s.code){const{total:e,results:n}=s.data,l={results:n,page:c,limit:t,totalRecords:e,totalPages:Math.ceil(e/a.limit)};yield o.put(i.actionFetchedComicsMarvel(l))}else yield o.put(i.actionFetchFailComicsMarvel())}catch(e){console.log("error",e),yield o.put(i.actionFetchFailComicsMarvel())}}t.default=[function*(){yield o.takeEvery(a.ACTION_REQUEST_FETCH_COMICS,s)}]},Kmqr:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("7alH"),i=c("kUgH"),n=c("0fKb"),s=c("55Ip"),l=e=>e.comicsList.map(e=>o.createElement(i.default,{key:e.id,comic:e})),r=e=>o.createElement("table",{className:"table table-hover"},o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,o.createElement("h5",null,"#")),o.createElement("td",null,o.createElement("h5",null,"Title")),o.createElement("td",null,o.createElement("h5",null,"Link")),o.createElement("td",null,o.createElement("h5",null,"Image"))),e.comicsList.map(e=>o.createElement("tr",{key:e.id},o.createElement("td",null,e.id),o.createElement("td",null,e.title),o.createElement("td",null,o.createElement(s.Link,{to:`/comic/${e.id}`},"/comic/",e.id)),o.createElement("td",null,o.createElement("img",{src:`${e.thumbnail.path}.${e.thumbnail.extension}`,alt:""}))))));t.default=a.default(class extends o.Component{render(){const{results:e,page:t,limit:c,totalRecords:a}=this.props.comics.data,{keySearch:i,viewsMethods:s,resultsWithKeySearch:m}=this.props.comics;let p;return p="list"===s?o.createElement("div",{className:"page-comics-block-items-list"},""!==i.trim()?o.createElement(r,{comicsList:m}):o.createElement(r,{comicsList:e})):o.createElement("div",{className:"page-comics-block-items"},""!==i.trim()?o.createElement(l,{comicsList:m}):o.createElement(l,{comicsList:e})),o.createElement("div",{className:"page-comics-block"},p,o.createElement("div",{className:"page-comics-block-pagination"},o.createElement(n.default,{activePage:t,itemsCountPerPage:c,totalItemsCount:a,pageRangeDisplayed:5,onChange:e=>this.props.onPageChange(e)})))}})},L8tp:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("C8MW"),a={status:"",data:{},cache:[]};t.default=((e=a,t)=>{switch(t.type){case o.ACTION_FETCHING_COMIC:return Object.assign({},e,{status:"fetching"});case o.ACTION_FETCHED_COMIC:{const c=Object.assign({},t.payload),o=e.cache.some(e=>e.id==c.id);let a=[...e.cache];return!o&&a.push(c),Object.assign({},e,{status:"fetched",data:c,cache:a})}case o.ACTION_FETCH_FAIL_COMIC:return Object.assign({},e,{status:"error"});default:return e}})},OUdY:function(e,t,c){var o=c("r0rN");"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};c("aET+")(o,a);o.locals&&(e.exports=o.locals)},Oc24:function(e,t,c){var o={"./Comics/features/comic-details/module/redux-saga.ts":"/wZp","./Comics/module/redux-saga.ts":"Igxp"};function a(e){var t=i(e);return c(t)}function i(e){if(!c.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="Oc24"},"Q8O/":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("G4qV");t.comicSelector=o.createSelector(e=>e.comic,e=>e)},RSCK:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("5rFJ"),a=c("Oc24");let i=[];a.keys().forEach(e=>{a(e).default&&(i=[...i,...a(e).default])});const n=i.map(e=>o.fork(e));t.default=function*(){yield o.all([...n])}},TT5w:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("G4qV");t.comicsSelector=o.createSelector(e=>e.comics,e=>e)},XCix:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("Q8O/"),a=c("lKzL");t.mapStateToProps=(e=>({comic:o.comicSelector(e)})),t.mapDispatchToProps={fetchComicMarvel:a.actionRequestFetchComicMarvel,cacheComicMarvel:a.actionFetchedComicMarvel}},bk04:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("6h7V"),i=c("uprG"),n=c("eHHv"),s=c("55Ip"),l=c("/MKj"),r=c("XCix");c("OUdY");const m=c("Nm0s"),p=c("uIrM");t.default=n.compose(s.withRouter,l.connect(r.mapStateToProps,r.mapDispatchToProps),e=>(class extends o.Component{componentDidMount(){const{cache:e}=this.props.comic,t=this.props.match.params.id,c=e.find(e=>e.id==t);c?this.props.cacheComicMarvel(c):this.props.fetchComicMarvel(t)}render(){const{status:t}=this.props.comic;let c;return"fetched"===t?c=o.createElement(p.default,null,o.createElement(e,Object.assign({},this.props))):"fetching"===t&&(c=o.createElement("div",{className:"spinner"},o.createElement(m.BeatLoader,{sizeUnit:"px",size:15,color:"rgb(54, 215, 183)",loading:!0}))),o.createElement("div",{className:"wrap"},o.createElement(a.default,null),o.createElement("div",{className:"page-comic"},c),o.createElement(i.default,null))}}))},cFIT:function(e,t,c){var o=c("wTQt");"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};c("aET+")(o,a);o.locals&&(e.exports=o.locals)},cib4:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("1yTB");t.default=class{constructor(e){this.getApiServices=(()=>`${o.marvelApiConfigs.domain}/${this.type}`),this.getConfig=(()=>({ts:o.marvelApiConfigs.ts,apikey:o.marvelApiConfigs.apikey,hash:o.marvelApiConfigs.hash})),this.type=e}}},"f6+o":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("Cnzs");t.actionRequestFetchComicsMarvel=(e=>({type:o.ACTION_REQUEST_FETCH_COMICS,payload:e})),t.actionFetchingComicsMarvel=(()=>({type:o.ACTION_FETCHING_COMICS})),t.actionFetchedComicsMarvel=(e=>({type:o.ACTION_FETCHED_COMICS,payload:e})),t.actionFetchFailComicsMarvel=(()=>({type:o.ACTION_FETCH_FAIL_COMICS})),t.actionSortComicsByField=(e=>({type:o.ACTION_SORT_COMICS,payload:e})),t.actionSearchComicsByKey=(e=>({type:o.ACTION_SEARCH_COMICS,payload:e})),t.actionViewsComics=(e=>({type:o.ACTION_CHANGE_VIEWS_COMICS,payload:e}))},"i+Nf":function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("/MKj"),i=c("sRBN");t.default=a.connect(i.mapStateToProps,i.mapDispatchToProps)(class extends o.Component{render(){const{sortBy:e}=this.props.comics,t=this.props.actionSortComics;return o.createElement("select",{className:"sort-box",value:e,onChange:e=>t(e.target.value)},o.createElement("option",{value:"id"},"Sort by"),o.createElement("option",{value:"title"},"Title"))}})},"j+Ot":function(e,t,c){var o=c("s1Pp");"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};c("aET+")(o,a);o.locals&&(e.exports=o.locals)},kUgH:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI"),a=c("55Ip");t.default=class extends o.Component{render(){const{id:e,title:t,thumbnail:c}=this.props.comic,i=`${c.path}.${c.extension}`;return o.createElement("div",{className:"comic-item"},o.createElement("div",{className:"comic-item-image"},o.createElement(a.Link,{to:`/comic/${e}`},o.createElement("img",{src:i,alt:`image ${t}`}))),o.createElement("div",{className:"comic-item-text"},o.createElement("h5",null,t)))}}},lKzL:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("C8MW");t.actionRequestFetchComicMarvel=(e=>({type:o.ACTION_REQUEST_FETCH_COMIC,payload:e})),t.actionFetchingComicMarvel=(()=>({type:o.ACTION_FETCHING_COMIC})),t.actionFetchedComicMarvel=(e=>({type:o.ACTION_FETCHED_COMIC,payload:e})),t.actionFetchFailComicMarvel=(()=>({type:o.ACTION_FETCH_FAIL_COMIC}))},r0rN:function(e,t,c){(e.exports=c("JPst")(!1)).push([e.i,".page-comic {\n  width: 100%;\n  background-color: #030306;\n  min-height: 100vh;\n  color: #fff; }\n  .page-comic .spinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh; }\n  .page-comic .page-comic-block {\n    width: 80%;\n    margin: 0 auto; }\n    .page-comic .page-comic-block .page-comic-block-details {\n      padding: 50px;\n      display: flex;\n      justify-content: center; }\n      .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-thumbnail {\n        margin: 10px; }\n        .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-thumbnail img {\n          width: 450px;\n          height: 680px; }\n      .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description {\n        margin: 10px;\n        width: 500px;\n        height: auto; }\n        .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description .description {\n          font-weight: 600; }\n        .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description .creator {\n          display: flex;\n          flex-direction: column;\n          margin: 30px 0; }\n          .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description .creator li h5 {\n            font-weight: bold; }\n            .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description .creator li h5::first-letter {\n              text-transform: uppercase; }\n\n@media screen and (max-width: 2560px) {\n  .page-comic .page-comic-block {\n    width: 90%; } }\n\n@media screen and (max-width: 1024px) {\n  .page-comic .page-comic-block {\n    width: 100%;\n    margin: 0; } }\n\n@media screen and (max-width: 768px) {\n  .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-thumbnail img {\n    width: 260px;\n    height: 400px; }\n  .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description {\n    margin: 10px;\n    width: 400px;\n    height: auto; }\n    .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description h1 {\n      font-size: 24px; } }\n\n@media screen and (max-width: 414px) {\n  .page-comic .page-comic-block .page-comic-block-details {\n    flex-direction: column; }\n  .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-thumbnail {\n    margin: 0 auto; }\n    .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-thumbnail img {\n      width: 160px;\n      height: 150px; }\n  .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description {\n    margin: 10px;\n    width: 300px;\n    height: auto; }\n    .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description h1 {\n      font-size: 18px; }\n    .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description .creator {\n      display: grid;\n      grid-template-columns: 1fr 1fr; } }\n\n@media screen and (max-width: 375px) {\n  .page-comic .page-comic-block .page-comic-block-details {\n    padding: 30px; } }\n\n@media screen and (max-width: 320px) {\n  .page-comic .page-comic-block .page-comic-block-details .page-comic-block-details-description {\n    width: 280px; } }\n",""])},r85p:function(e,t,c){var o=c("AksK");"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};c("aET+")(o,a);o.locals&&(e.exports=o.locals)},s1Pp:function(e,t,c){(e.exports=c("JPst")(!1)).push([e.i,".home-footer {\n  height: 100px;\n  background-color: #393939;\n  display: flex;\n  justify-content: center;\n  align-content: center; }\n  .home-footer p {\n    color: #fff;\n    font-weight: bold;\n    text-align: center;\n    margin: auto 0; }\n",""])},s6fg:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("ANjH"),a=c("LvDl"),i=c("tsKB"),n={};i.keys().forEach(e=>{const t=a.camelCase(e.match(/(\w{1,})(.reducer.ts)/)[1]);n[t]=i(e).default}),t.default=o.combineReducers(Object.assign({},n))},sRBN:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("TT5w"),a=c("f6+o");t.mapStateToProps=(e=>({comics:o.comicsSelector(e)})),t.mapDispatchToProps={fetchComicsMarvel:a.actionRequestFetchComicsMarvel,actionSortComics:a.actionSortComicsByField,actionSearchComics:a.actionSearchComicsByKey,actionViewsComics:a.actionViewsComics,cachePageComicsMarvel:a.actionFetchedComicsMarvel}},tsKB:function(e,t,c){var o={"./Comics/features/comic-details/module/comic.reducer.ts":"L8tp","./Comics/module/comics.reducer.ts":"2wv3"};function a(e){var t=i(e);return c(t)}function i(e){if(!c.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="tsKB"},uIrM:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI");t.default=class extends o.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.log(e,t)}render(){return this.state.hasError?o.createElement("h1",null,"Something went wrong. Please try again later!"):this.props.children}}},uprG:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=c("q1tI");c("j+Ot");t.default=class extends o.Component{render(){return o.createElement("div",{className:"home-footer"},o.createElement("p",null,"© 2019 Copyright: marvel.com"))}}},wTQt:function(e,t,c){(e.exports=c("JPst")(!1)).push([e.i,"@keyframes animiate-comic-item {\n  0% {\n    opacity: 0;\n    transform: scale(1); }\n  50% {\n    transform: scale(1.1); }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n.page-comics {\n  width: 100%;\n  min-height: 100vh; }\n  .page-comics .spinner {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh; }\n  .page-comics .page-comics-block {\n    width: 80%;\n    margin: 0 auto; }\n    .page-comics .page-comics-block .page-comics-block-items {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      height: auto; }\n      .page-comics .page-comics-block .page-comics-block-items .comic-item {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        align-content: center;\n        padding: 10px;\n        margin: 10px;\n        animation: animiate-comic-item 1.5s linear; }\n        .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-image {\n          margin-bottom: 20px;\n          box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4); }\n          .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-image a img {\n            max-width: 100%;\n            width: 285px;\n            height: 427.5px; }\n        .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-text h5 {\n          font-size: 12px;\n          font-weight: bold;\n          text-align: center;\n          white-space: nowrap;\n          width: 285px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          margin: 0;\n          padding: 0; }\n    .page-comics .page-comics-block .page-comics-block-items-list img {\n      height: 150px;\n      width: 150px; }\n    .page-comics .page-comics-block .page-comics-block-pagination {\n      display: flex;\n      justify-content: center; }\n\n@media screen and (max-width: 2560px) {\n  .page-comics .page-comics-block {\n    width: 90%; } }\n\n@media screen and (max-width: 1024px) {\n  .page-comics .page-comics-block .page-comics-block-items {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    height: auto; }\n    .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-image a img {\n      max-width: 100%;\n      width: 230px;\n      height: 330px; }\n    .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-text h5 {\n      width: 230px; } }\n\n@media screen and (max-width: 768px) {\n  .page-comics .page-comics-block {\n    width: 100%; }\n    .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-image a img {\n      max-width: 100%;\n      width: 220px;\n      height: 300px; }\n    .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-text h5 {\n      width: 220px; } }\n\n@media screen and (max-width: 414px) {\n  .page-comics .page-comics-block .page-comics-block-items {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    height: auto; }\n    .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-image a img {\n      max-width: 100%;\n      width: 150px;\n      height: 150px; }\n    .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-text h5 {\n      width: 150px; }\n  .page-comics .page-comics-block .page-comics-block-items-list {\n    font-size: 9px; }\n    .page-comics .page-comics-block .page-comics-block-items-list img {\n      height: 50px;\n      width: 50px; } }\n\n@media screen and (max-width: 320px) {\n  .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-image a img {\n    max-width: 100%;\n    width: 130px;\n    height: 130px; }\n  .page-comics .page-comics-block .page-comics-block-items .comic-item .comic-item-text h5 {\n    width: 130px; } }\n",""])},xmrc:function(e,t,c){(e.exports=c("JPst")(!1)).push([e.i,"body {\n  font-family: arial;\n  background: #f8f9fb; }\n\nhtml,\nbody,\nul,\nol,\nli,\nform,\nfieldset,\nlegend,\ndiv,\ndiv.row {\n  margin: 0;\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0; }\n\nfieldset,\nimg {\n  border: 0; }\n\nli {\n  list-style: none; }\n\na {\n  text-decoration: none !important; }\n\n.wrap {\n  margin: 0;\n  padding: 0; }\n",""])}},[[0,1,2]]]);
//# sourceMappingURL=main.js.map