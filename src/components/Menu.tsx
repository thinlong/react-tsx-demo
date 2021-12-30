/*
 * @Author: xiangliang
 * @Date: 2021-12-03 17:49:35
 * @LastEditTime: 2021-12-06 17:45:41
 * @Description:
 */
import { ButtonBase, List, ListItem, Typography } from "@material-ui/core";
import { DockTwoTone, Star } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MenuCfg } from "../const/menuCfg";

const Menu = (props: any) => {
    const { classes, expanded } = props;
    const [menuList, setMenuList] = useState([]);
    const navigate = useNavigate();

    const getMenu = () => {
        //定制化菜单
        const customMenu: any = [{ label: '子路由', value: 1 }, { label: '', value: 2 }];

        setMenuList(customMenu);
    }

    useEffect(() => {
        getMenu();
    }, [])

    const handMenuItemClick = (item: any) => {
        console.log("menu", item.label);
        navigate('article');
    }

    return (
        <>
            <List>
                {
                    menuList.map((item: any) => {
                        return <ListItem key={item.id} onClick={() => handMenuItemClick(item)}>
                            <ButtonBase>
                                <Star />
                                {expanded === true ? <Typography>{item.label}</Typography> : undefined}
                            </ButtonBase>
                        </ListItem>
                    })
                }
            </List>
        </>
    )
}

export default Menu;