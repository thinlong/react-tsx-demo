/*
 * @Author: xiangliang
 * @Date: 2021-11-19 16:53:17
 * @LastEditTime: 2021-11-25 14:28:22
 * @Description: 
 */
import { Button, Drawer, withStyles } from "@material-ui/core";
import { useState } from "react";
// import styles from "./Header-jss";
import ThemeSwitch1 from "../components/ThemeSwitch/ThemeSwitch1";
import ThemeSwitch2 from "../components/ThemeSwitch/ThemeSwitch2";
import ThemeSwitch3 from "../components/ThemeSwitch/ThemeSwitch3";


const style = (theme: any) => ({
    root: {
        backgroundColor: theme.backgound,
    },
    btn: {
        backgroundColor: theme.btn.normal
    }
})

const Header = (props: any) => {
    const { classes } = props;
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const openThemeDrawer = () => {
        setDrawerOpen(true);
    }

    return (
        <>
            <Button onClick={openThemeDrawer} className={classes.btn}>皮肤</Button>
            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <ThemeSwitch1 />
                <ThemeSwitch2 />
                <ThemeSwitch3 />

            </Drawer>
        </>
    )
}



export default withStyles(style as any)(Header);