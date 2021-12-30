/*
 * @Author: xiangliang
 * @Date: 2021-11-25 19:19:04
 * @LastEditTime: 2021-11-25 20:02:03
 * @Description:
 */

import { ButtonBase, List, ListItem, Typography } from "@material-ui/core";
import { DockTwoTone, Star } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { MenuCfg } from "../../../../const/menuCfg";

const Menu = (props: any) => {
    const { classes } = props;
    const [expend, setExpend] = useState<boolean>(false);
    const [menuList, setMenuList] = useState([]);

    const getMenu = () => {
        //定制化菜单
        const customMenuIds = ["1", "3", "4"];
        const customMenu: any = [];
        customMenuIds.map((item: string) => {
            console.log("111", item);
            // @ts-ignore
            const itemCfg = MenuCfg[item];
            console.log(itemCfg);
            if (itemCfg) {
                customMenu.push(itemCfg);
            }
        });
        setMenuList(customMenu);
    }

    useEffect(() => {
        getMenu();
    }, [])

    const handMenuItemClick = (item: any) => {
        console.log("menu", item.label);
    }

    const handleExpend = () => {
        setExpend(!expend);
    }

    return (
        <>
            <p>菜单</p>
            <ButtonBase onClick={handleExpend}>
                <DockTwoTone />
            </ButtonBase>
            <List>
                {
                    menuList.map((item: any) => {
                        return <ListItem key={item.id} onClick={() => handMenuItemClick(item)}>
                            <Star />
                            {expend === true ? <Typography>{item.label}</Typography> : undefined}
                        </ListItem>
                    })
                }
            </List>
        </>
    )
}

export default Menu;