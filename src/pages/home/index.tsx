/*
 * @Author: xiangliang
 * @Date: 2021-11-03 20:24:58
 * @LastEditTime: 2021-11-25 20:03:23
 * @Description:
 */
import React from "react";
import { Grid, withStyles } from "@material-ui/core";

import Header from "./header";
import LeftSider from "./leftSider";

const headerHeight = 80;
const styles = (theme: any) => ({
    root: {
    },
    header: {
        width: '100%',
        height: `${headerHeight}px`,
        background: '#ff00ee',

    },
    main: {
        height: `calc(100vh - ${headerHeight}px)`,
        background: '#eeddee',
    },
    siderContainer: {
        backgroundColor: '#0f34cd',
    }
})


function Home(props: any) {
    const { classes } = props;

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.header}>
                <Header></Header>
            </Grid>
            <Grid className={classes.main} item container>
                <Grid className={classes.siderContainer}>
                    <LeftSider></LeftSider>
                </Grid>
                <Grid>
                    <p>内容区域</p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles as any)(Home);