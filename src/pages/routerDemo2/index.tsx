/*
 * @Author: xiangliang
 * @Date: 2021-12-03 15:39:21
 * @LastEditTime: 2021-12-03 16:25:11
 * @Description:
 */
import React, { Suspense } from "react";
import { withStyles } from "@material-ui/core";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../asyncPage";
import RouteButton from "../../components/RouteButton";

const styles = (theme: any) => ({

});

const RouterDemo = (props: any) => {
    return (
        <>

            <Layout>
            </Layout>
        </>
    )
}

export default withStyles(styles as any)(RouterDemo);