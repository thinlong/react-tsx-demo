/*
 * @Author: xiangliang
 * @Date: 2021-12-06 16:13:10
 * @LastEditTime: 2021-12-08 16:17:36
 * @Description: 
 */
import { Button, Grid, List, ListItem, Paper, Typography, withStyles } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router";


const styles = (theme: any) => ({

})

interface IListItemRenderProps {
    id: string,
    title: string,
}



const ListItemRender = (data: IListItemRenderProps, clickCB: Function) => {
    return (
        <ListItem key={data.id} onClick={() => clickCB(data.id)}>
            <Button variant="text">{data.title}</Button>
        </ListItem>
    )
}

const Article = (props: any) => {
    const { classes } = props;

    const listData = [{ id: '1', title: 'react' }, { id: '2', title: 'vue' }];

    const navigate = useNavigate();

    const handleItemClick = (id: string) => {
        console.log('id', id);
        navigate('category/1');
    }

    return (
        <>
            <Grid>
                <Grid className={classes.module}>
                    <Paper>
                        <Typography>知识点</Typography>
                        <Grid>
                            <List>
                                {
                                    listData.map(item => ListItemRender(item, handleItemClick))
                                }
                            </List>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles as any)(Article);