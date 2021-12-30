/*
 * @Author: xiangliang
 * @Date: 2021-11-17 15:08:42
 * @LastEditTime: 2021-11-18 11:59:31
 * @Description:
 */

import currentTheme from "./customTheme"

const crtTheme: any = currentTheme;

const applicationTheme = (theme: string) => ({
    palette: {
        primary: {
            // light: 这将从 palette.primary.main 中进行计算，
            main: '#ff4400',
            // dark: 这将从 palette.primary.main 中进行计算，
            // contrastText: 这将计算与 palette.primary.main 的对比度
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: 这将从 palette.secondary.main 中进行计算，
            contrastText: '#ffcc00',
        },
        // 使用 `getContrastText()` 来最大化
        // 背景和文本的对比度
        contrastThreshold: 3,
        // 使用下面的函数用于将颜色的亮度在其调色板中
        // 移动大约两个指数。
        // 例如，从红色 500（Red 500）切换到 红色 300（Red 300）或 红色 700（Red 700）。
        tonalOffset: 0.2,
    },
    ...crtTheme[theme]
})

export default applicationTheme