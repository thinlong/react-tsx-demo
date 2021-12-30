/*
 * @Author: xiangliang
 * @Date: 2021-11-24 16:29:32
 * @LastEditTime: 2021-11-25 11:22:12
 * @Description: 切换主题组件
 * 使用useSelector、useDispatch
 */

import { Card, Grid, MenuItem, Select, Typography, withStyles } from "@material-ui/core"
import { Star } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { ThemeListData } from "../../../../const"
import { switchThemeAction } from "../../../../store/theme/action";
import { IState } from "../../../../store/types";

const style = (theme: any) => ({
    card: {
        margin: '10px',
    },
    root: {
        width: '200px',
        textAlign: "center"
    },
    title: {
        borderBottom: 'solid 2px #0066ee'
    }
})

const ThemeSwitch = (props: any) => {
    const { classes } = props;

    const themeName = useSelector(
        (state: IState) => state.theme.themeName
    );

    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        console.log(e.target.value);
        const themeNameTemp = e.target.value;
        if (themeNameTemp !== themeName) {
            dispatch(switchThemeAction(themeNameTemp));
        }
    }

    return (
        <>
            <Card className={classes.card}>
                <Grid className={classes.root} container direction="column">
                    <Grid item container className={classes.title}>
                        <Grid item>
                            <Star />
                        </Grid>
                        <Grid item>
                            <Typography>使用</Typography>
                        </Grid>

                    </Grid>
                    <Grid>
                        <Typography>皮肤主题</Typography>
                        <Select value={themeName} label="主题样式" onChange={handleChange}>
                            {
                                ThemeListData.map((item, index) => {
                                    return <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                })
                            }
                        </Select>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default withStyles(style as any)(ThemeSwitch)