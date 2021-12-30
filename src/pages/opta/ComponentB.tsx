/*
 * @Author: xiangliang
 * @Date: 2021-12-20 18:34:17
 * @LastEditTime: 2021-12-20 18:39:05
 * @Description: 
 */
import React, { useEffect, useState } from "react"
import { Button, Switch, withStyles } from "@material-ui/core"

const styles = (theme: any) => {

}

const ComponentB = (props: any) => {
    const [btnText, setBtnText] = useState('CLICK');
    console.log("btnText", btnText);

    return (
        <>
            <Button variant="outlined">{btnText}</Button>
        </>
    )
}

export default withStyles(styles)(ComponentB);