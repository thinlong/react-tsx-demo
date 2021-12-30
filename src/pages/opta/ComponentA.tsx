/*
 * @Author: xiangliang
 * @Date: 2021-12-20 18:29:33
 * @LastEditTime: 2021-12-20 18:38:01
 * @Description: 
 */

import React, { useEffect } from "react"
import { Switch, withStyles } from "@material-ui/core"

const styles = (theme: any) => {

}

const ComponentA = (props: any) => {

    useEffect(() => {
        console.log('11111');
    })

    return (
        <>
            <Switch></Switch>
        </>
    )
}

export default withStyles(styles)(ComponentA);