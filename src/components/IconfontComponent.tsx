/*
 * @Author: xiangliang
 * @Date: 2021-11-19 13:59:41
 * @LastEditTime: 2021-12-03 17:39:11
 * @Description:
 */
import React from "react";
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import styles from "./IconfontComponent-jss"
import { Icon } from "@material-ui/core";


interface IIconfontComponent {
    classes: any,
    iconName: string
}

const IconfontComponent = (props: IIconfontComponent) => {
    const { classes, iconName } = props;
    console.log("classes", classes);

    return (
        <>
            {/* <div className={classes.bigIcon}>Iconfont示例</div>
            <i className={classNames('iconfont', `icon-${iconName}`)} style={{ color: '#ff0000' }}></i>
            <span className={classNames('iconfont', `icon-${iconName}`, true ? classes.bigIcon : null)} ></span>
            <Icon className={classNames('iconfont', 'icon-deploy')} /> */}
            <Icon className={classNames('iconfont', iconName)} />
        </>
    )
}

export default withStyles(styles as any)(IconfontComponent);