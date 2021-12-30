/*
 * @Author: xiangliang
 * @Date: 2021-11-24 11:21:08
 * @LastEditTime: 2021-11-24 12:01:03
 * @Description: 所有reducer
 */

import { combineReducers } from "redux";
import themeReducer from "./theme/reducer";

export default function createReducer(injectedReducers = {}) {
    return combineReducers({
        //   router: connectRouter(history),
        theme: themeReducer,
        ...injectedReducers,
    });
}
