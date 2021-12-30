/*
 * @Author: xiangliang
 * @Date: 2021-11-17 15:31:13
 * @LastEditTime: 2021-11-25 14:27:35
 * @Description: 
 */
import React from "react";
import { MuiThemeProvider, withTheme } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'

import applicationTheme from "../styles/theme/applicationTheme";
import useTheme from "../hooks/useTheme";

function ThemeWrapper(props: any) {
    const { children } = props;
    const { currentTheme } = useTheme();
    const theme = createTheme(applicationTheme(currentTheme));

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    );
}


export default withTheme(ThemeWrapper);
