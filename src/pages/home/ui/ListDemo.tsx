/*
 * @Author: xiangliang
 * @Date: 2021-11-05 10:38:12
 * @LastEditTime: 2021-11-05 14:30:07
 * @Description:
 */

import { Collapse, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";

function ListDemo() {
    const ListData = [
        {
            id: 1,
            label: "蔬菜",
            open: true,
            content: [
                {
                    id: 101,
                    label: "茄子"
                },
                {
                    id: 102,
                    label: "白菜"
                },
                {
                    id: 103,
                    label: "辣椒"
                }
            ]
        },
        {
            id: 2,
            label: "水果",
            open: false,
            content: [
                {
                    id: 201,
                    label: "苹果"
                },
                {
                    id: 202,
                    label: "香蕉"
                },
                {
                    id: 203,
                    label: "西瓜"
                }
            ]
        }
    ]
    const [listData, setListData] = useState(ListData);


    function handleClick(item: any) {
        item.open = !item.open;
        setListData([...listData]);
    }

    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <List>
                        {
                            listData.map((item, index) => {
                                return (
                                    <Grid key={`grid${item.id}`}>
                                        <ListItem button onClick={() => { handleClick(item) }} key={`list${item.id}`}>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText>{item.label}</ListItemText>
                                            {item.open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>

                                        <Collapse in={item.open} timeout="auto" unmountOnExit key={`collapse${item.id}`}>
                                            <List component="div" disablePadding key={`collapse-list${item.id}`}>
                                                {item.content.map((subItem, subIndex) => {
                                                    return (
                                                        <ListItem button key={`sublist${subItem.id}`}>
                                                            <ListItemIcon>
                                                                <StarBorder />
                                                            </ListItemIcon>
                                                            <ListItemText>{subItem.label}</ListItemText>
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </Collapse>
                                    </Grid>
                                )
                            })
                        }
                    </List>
                </Grid>
                <Grid item>
                    <Typography>早餐搭配</Typography>
                </Grid>
            </Grid>


        </>
    )
}

export default ListDemo;