import { combineReducers } from "redux";
import {camelCase} from 'lodash';

const requireModule = require.context("../modules", true, /\.reducer.ts/); //extract [reducerName].reducer.ts files inside redux folder

const reducers : any= {};

requireModule.keys().forEach( (fileName) => {
  const reducerName = camelCase(fileName.match(/(\w{1,})(.reducer.ts)/)[1])
  reducers[reducerName] = requireModule(fileName).default;
});

export default combineReducers({
    ...reducers
})

