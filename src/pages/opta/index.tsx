/*
 * @Author: xiangliang
 * @Date: 2021-12-20 18:27:28
 * @LastEditTime: 2021-12-20 18:36:22
 * @Description: 
 */
import React from "react"
import { withStyles } from "@material-ui/core"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"

const styles = (theme: any) => {

}

const OP = (props: any) => {


    return (
        <>
            <ComponentA />
            <ComponentB />
        </>
    )
}

export default withStyles(styles)(OP);