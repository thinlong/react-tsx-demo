/*
 * @Author: xiangliang
 * @Date: 2021-12-23 14:13:02
 * @LastEditTime: 2021-12-23 14:29:05
 * @Description: 简单的杂类练习
 */
import { AppBar, Grid, Typography, withStyles } from "@material-ui/core"
import React from "react"
import PromiseErrorComponent from "./promiseError";

const styles = (theme: any) => ({

});

const PractiseComponent = (props: any) => {

    return (
        <>
            <AppBar><Typography>练习</Typography></AppBar>
            <Grid>
                <PromiseErrorComponent></PromiseErrorComponent>
            </Grid>
        </>
    )
};

export default withStyles(styles as any)(PractiseComponent);