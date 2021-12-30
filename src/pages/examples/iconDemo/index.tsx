/*
 * @Author: xiangliang
 * @Date: 2021-11-19 15:49:10
 * @LastEditTime: 2021-11-19 16:15:54
 * @Description:
 */

import { Icon, withStyles } from "@material-ui/core";
import React from "react";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';


const styles = (theme: any) => ({

})

const IconDemoPage = (props: any) => {

    return (
        <>
            <AccessAlarmIcon fontSize="large" />
            <ThreeDRotation color="primary" />
            <Icon className="fa fa-plus-circle" />
            <Icon>add_circle</Icon>
        </>
    )
}

export default withStyles(styles as any)(IconDemoPage)