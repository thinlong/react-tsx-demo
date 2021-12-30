/*
 * @Author: xiangliang
 * @Date: 2021-12-06 16:13:10
 * @LastEditTime: 2021-12-08 16:12:40
 * @Description: 
 */
import { Grid, List, ListItem, Paper, Typography, withStyles } from "@material-ui/core";
import classNames from "classnames";
import React from "react";


const styles = (theme: any) => ({

})

const ArticleDetail = (props: any) => {
    const { classes,
    } = props;

    console.log(props);

    return (
        <>
            <Grid>
                <p>标题</p>
                <p>内容</p>
            </Grid>
        </>
    )
}

export default withStyles(styles as any)(ArticleDetail);