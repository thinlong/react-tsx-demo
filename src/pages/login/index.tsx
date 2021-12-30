/*
 * @Author: xiangliang
 * @Date: 2021-11-15 19:12:24
 * @LastEditTime: 2021-12-03 16:18:50
 * @Description:
 */

import { Button, Input, List, ListItem, Typography, withStyles } from "@material-ui/core";
import { FC, useState } from "react";
// import { injectIntl } from 'react-intl';
// import { withRouter } from 'react-router-dom';
import styles from './index-jss';
import IconfontComponent from "../../components/IconfontComponent";
import IconDemo from "../examples/iconDemo";
import { useNavigate } from "react-router";

function LoginPage(props: any) {
    const navigate = useNavigate();
    const ListDataDefault = [{ label: '苹果' }, { label: '梨' }, { label: '西瓜' }];

    const [listData, setListData] = useState(ListDataDefault);

    const handItemClick = (itemValue: any) => {
        const newData: any = listData.filter(item => item !== itemValue);
        console.log(newData);
        setListData(newData);
    }

    const ItemRender = (item: any) => {
        return (
            <ListItem onClick={e => handItemClick(item)}>
                <Typography>{item.label}</Typography>
            </ListItem>
        )
    }

    // const onInputChange = (e: any) => {
    //     console.log(e);
    //     const value = e.target.value;
    //     setListData([...listData, { label: value }]);
    // }

    const onInputKeydown = (e: any) => {
        if (e?.code === "Enter") {
            const value = e.target.value;
            if (value?.length) {
                console.log("add");
                setListData([...listData, { label: value }]);
            }
        }

    }

    const goto = () => {
        // const navigate = useNavigate();
        navigate("/");
    }

    return (
        <>
            <span className={props.classes.btn}>login</span>            <Input placeholder="水果" onKeyDown={onInputKeydown}></Input>
            <List>
                <ListItem>狗</ListItem>
                {
                    listData.map(item => ItemRender(item))
                }
            </List>
            <Button onClick={goto}>GO</Button>
            <IconfontComponent iconName="download" />
            <IconDemo />
        </>
    )
}

export default withStyles(styles as any)(LoginPage);