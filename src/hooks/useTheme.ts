/*
 * @Author: xiangliang
 * @Date: 2021-11-24 15:53:48
 * @LastEditTime: 2021-11-25 14:20:18
 * @Description:
 */

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchThemeAction } from "../store/theme/action";
import { IState } from "../store/types";
import { THEME_NAME } from "../types/themeType";

const useTheme = () => {
    const dispatch = useDispatch();

    const currentTheme = useSelector(
        (state: IState) => {
            const themeKey = localStorage.getItem('currentTheme');
            console.log("localStorage", themeKey);
            if (themeKey) {
                // @ts-ignore    
                const result = THEME_NAME[JSON.parse(themeKey)];
                console.log("result", result);
                return result;
            }
            return state.theme.themeName
        }
    );

    const setCurrentTheme = useCallback(
        (themeName: string) => {
            console.log("set localStorage", themeName);
            localStorage.setItem('currentTheme', JSON.stringify(themeName));
            return dispatch(switchThemeAction(themeName));
        },
        [dispatch]
    );
    return { currentTheme, setCurrentTheme };
};

export default useTheme;