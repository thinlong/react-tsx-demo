/*
 * @Author: xiangliang
 * @Date: 2021-11-24 16:29:32
 * @LastEditTime: 2021-11-25 11:21:34
 * @Description: 切换主题组件
 * 使用connect
 */

import { Button, Card, Grid, List, ListItem, Typography, withStyles } from "@material-ui/core"
import { Star } from "@material-ui/icons";
import { connect } from "react-redux";
import { ThemeListData } from "../../../../const"
import { switchThemeAction } from "../../../../store/theme/action";

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

    const handleChangeTheme = (item: any) => {
        if (item.value !== props.themeName) {
            props.doSwitchTheme(item.value);
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
                            <Typography>使用connect</Typography>
                        </Grid>

                    </Grid>
                    <Grid>
                        <Typography>皮肤主题</Typography>
                        <List>
                            {ThemeListData.map((item: any) => {
                                return (
                                    <ListItem key={item.value}>
                                        <Button variant={props.themeName === item.value ? "contained" : "outlined"} key={`button-${item.value}`} onClick={() => handleChangeTheme(item)}> {item.label}</Button>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        themeName: state.theme.themeName,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        doSwitchTheme: (themeName: string) =>
            dispatch(switchThemeAction(themeName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style as any)(ThemeSwitch))