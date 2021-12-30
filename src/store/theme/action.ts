/*
 * @Author: xiangliang
 * @Date: 2021-11-24 11:27:51
 * @LastEditTime: 2021-11-24 16:08:01
 * @Description:
 */
import { THEME_SWITCH } from "./types"

// 切换主题
export const switchThemeAction = (themeName: string) => {
    return {
        type: THEME_SWITCH,
        themeName
    }
}