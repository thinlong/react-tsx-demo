/*
 * @Author: xiangliang
 * @Date: 2021-12-03 11:34:44
 * @LastEditTime: 2021-12-08 16:19:47
 * @Description:
 */
import React from "react"
import { AppBar, Button, Grid, Toolbar, Typography, withStyles } from "@material-ui/core";
import { Route, BrowserRouter as Router, Routes, useNavigate, Outlet } from "react-router-dom";
import { LoginPage } from "../../asyncPage";
import SidebarMenu from "./SidebarMenu";

const styles = (theme: any) => ({

})

const Layout = (props: any) => {
    const { children } = props;
    console.log("33333", children);
    // const navigate = useNavigate();

    const handleGo = () => {
        // navigate("/login");
        window.location.href = "http://localhost:3000/login";
    };

    return (
        <Grid container direction="column">
            <Grid item>
                <AppBar position="static">
                    <Toolbar></Toolbar>
                </AppBar>
            </Grid>
            <Grid item container direction="row">
                <Grid item>
                    <SidebarMenu></SidebarMenu>
                </Grid>
                <Grid item>
                    {/* <main>
                        {children}
                    </main> */}
                    <Outlet />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles as any)(Layout)