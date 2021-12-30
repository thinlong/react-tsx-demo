/*
 * @Author: xiangliang
 * @Date: 2021-12-06 16:13:10
 * @LastEditTime: 2021-12-08 16:17:10
 * @Description: 
 */
import { Grid, List, ListItem, Paper, Typography, withStyles } from "@material-ui/core";
import classNames from "classnames";
import React from "react";


const styles = (theme: any) => ({

})

interface IListItemRenderProps {
    id: string,
    title: string,
}

const ListItemRender = (data: IListItemRenderProps) => {
    return (
        <ListItem key={data.id}>{data.title}</ListItem>
    )
}

const ArticleCateGory = (props: any) => {
    const { classes } = props;

    const listData = [{ id: '1', title: 'react组件' }, { id: '2', title: 'react路由' }]

    return (
        <>
            <Grid>
                <Grid className={classes.module}>
                    <Typography>react知识2</Typography>
                    <Grid>
                        <List>
                            {listData.map(item => {
                                ListItemRender(item);
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles as any)(ArticleCateGory);