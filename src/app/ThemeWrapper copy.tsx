/*
 * @Author: xiangliang
 * @Date: 2021-11-17 15:31:13
 * @LastEditTime: 2021-11-18 11:47:59
 * @Description: 
 */
import { jssPreset, MuiThemeProvider, StylesProvider, withStyles, withTheme } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'
import React from "react";
import applicationTheme from "../styles/theme/applicationTheme";
import { create } from 'jss';
import rtl from 'jss-rtl';

const styles = {
    root: {
        width: '100%',
        minHeight: '100%',
        marginTop: 0,
        zIndex: 1,
    },
};

// @ts-ignore
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const AppContext = React.createContext({
    currentTheme: '',
});

function ThemeWrapper(props: any) {
    const { classes, children } = props;
    const currentTheme = "blueTheme";
    console.log("rrr", applicationTheme(currentTheme));
    const theme = createTheme(applicationTheme(currentTheme));

    return (
        // <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
            {children}
            {/* <div className={classes.root}>
                    <AppContext.Provider
                        value={{
                            currentTheme: '',
                        }}
                    >
                        {children}
                    </AppContext.Provider>
                </div> */}
        </MuiThemeProvider>
        // </StylesProvider>
    );
}

export default withTheme<any>(withStyles(styles)(ThemeWrapper));
