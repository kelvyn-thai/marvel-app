import { all, fork } from 'redux-saga/effects';


const requireModule = require.context("../modules", true, /redux-saga.ts/); //extract redux-saga.ts files inside redux folder
let sagas : any = [];
requireModule.keys().forEach((fileName : string) => {

    if(requireModule(fileName).default){
        sagas=[...sagas,...requireModule(fileName).default];
    }
});
const globalSaga = sagas.map( (saga: any)=>fork(saga))

export default function* rootSaga() {
    yield all([
        ...globalSaga
    ])
}