/*
 * @Author: xiangliang
 * @Date: 2021-12-03 15:40:14
 * @LastEditTime: 2021-12-03 16:23:09
 * @Description:
 */
import React, { Suspense } from "react"
import { Button, Grid, Typography, withStyles } from "@material-ui/core";
import { Route, BrowserRouter as Router, Routes, useNavigate, Outlet } from "react-router-dom";
import { LoginPage } from "../../asyncPage";
import RouteButton from "../../../components/RouteButton";

const styles = (theme: any) => ({

})

const Layout = (props: any) => {
    const { children } = props;
    console.log(children);
    const navigate = useNavigate();

    const handleGo = () => {
        navigate("/login");
        // window.location.href = "http://localhost:3000/login";
    };

    return (
        <Grid>
            <Typography>routerDemo</Typography>
            <Grid>
                <Button onClick={handleGo}>按钮1</Button>
            </Grid>
            <section style={{ marginLeft: '200px' }}>
                <Router>
                    <RouteButton></RouteButton>
                    <Suspense fallback={<h1>loading</h1>}>
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                        </Routes>
                    </Suspense>
                </Router>
            </section>
        </Grid>
    )
}

export default withStyles(styles as any)(Layout)