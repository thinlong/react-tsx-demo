/*
 * @Author: xiangliang
 * @Date: 2021-11-24 11:19:08
 * @LastEditTime: 2021-11-24 12:01:49
 * @Description:
 */

import { createStore } from "redux";
import createReducer from "./reducers";


const store = createStore(createReducer());

export default store;