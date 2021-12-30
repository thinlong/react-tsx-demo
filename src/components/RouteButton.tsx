/*
 * @Author: xiangliang
 * @Date: 2021-12-03 15:59:36
 * @LastEditTime: 2021-12-03 16:12:37
 * @Description:
 */
import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";

function RouteButton(props: any) {
    const navigate = useNavigate();

    return (
        <Button onClick={() => { navigate('/login') }}>跳转</Button>
    )


}

export default RouteButton;