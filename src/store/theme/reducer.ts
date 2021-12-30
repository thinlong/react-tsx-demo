/*
 * @Author: xiangliang
 * @Date: 2021-11-24 11:28:12
 * @LastEditTime: 2021-11-24 14:24:43
 * @Description:
 */
import * as types from "./types"
import { THEME_NAME } from "../../types/themeType";

const initState = {
    themeName: THEME_NAME.DARK
}

export interface IThemeState {
    themeName: THEME_NAME,
}

export default function reducer(state: IThemeState = initState, action: any) {
    switch (action.type) {
        case types.THEME_SWITCH:
            return { ...state, themeName: action.themeName };
            break;
        default:
            return state;
    }
}