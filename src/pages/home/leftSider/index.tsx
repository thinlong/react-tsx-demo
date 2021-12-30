/*
 * @Author: xiangliang
 * @Date: 2021-11-25 19:12:10
 * @LastEditTime: 2021-11-25 19:51:50
 * @Description:左侧边栏
 */
import React from "react";
import { withStyles } from "@material-ui/core";
import Menu from "./menu";

const styles = (theme: any) => ({

});

const LeftSider = (props: any) => {


    return (
        <>
            <Menu></Menu>
        </>
    )
}

export default withStyles(styles as any)(LeftSider);