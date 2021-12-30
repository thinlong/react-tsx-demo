/*
 * @Author: xiangliang
 * @Date: 2021-12-03 17:16:29
 * @LastEditTime: 2021-12-06 16:06:55
 * @Description: 侧边栏菜单
 */
import React, { useState } from "react";
import { Grid, Icon, IconButton, withStyles } from "@material-ui/core";
import IconfontComponent from "../../../components/IconfontComponent";
import Menu from "../../../components/Menu";
import { APP_BAR_HEIGHT } from "../../../styles/styleVar";

const styles = (theme: any) => ({
    root: {
        height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
        borderRight: 'solid grey 2px',
    },
    top: {
        borderBottom: 'solid grey 2px',
    }
})

const SidebarMenu = (props: any) => {
    const { classes } = props;
    const [expanded, setExpanded] = useState<boolean>(true);

    return (
        <>
            <Grid className={classes.root}>
                <Grid className={classes.top}>
                    <IconButton onClick={() => { setExpanded(!expanded) }}>
                        {expanded === true ? <IconfontComponent iconName="iconzhuye" /> : <IconfontComponent iconName="iconcar" />}
                    </IconButton>
                </Grid>
                <Grid>
                    <Menu expanded={expanded}></Menu>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles as any)(SidebarMenu)
