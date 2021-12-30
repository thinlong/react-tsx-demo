/*
 * @Author: xiangliang
 * @Date: 2021-11-04 16:41:41
 * @LastEditTime: 2021-11-04 17:20:26
 * @Description:
 */
import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { Button, Checkbox, Grid, Zoom } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FabDemo() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const fabs = [
        {
            color: 'primary',
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            color: 'secondary',
            icon: <EditIcon />,
            label: 'Edit',
        }
    ]

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    Home
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon className={classes.extendedIcon} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </Grid>
            <Grid item container spacing={2}>
                <Grid item>
                    <Button variant="contained" onClick={() => setValue(0)}>按钮1</Button>
                    <Button variant="contained" onClick={() => setValue(1)}>按钮2</Button>
                </Grid>
                <Grid item>
                    {fabs.map((fab, index) => {
                        console.log("3333");

                        return (
                            <>
                                <Zoom key={fab.label} in={value === index} timeout={transitionDuration}
                                    style={{
                                        transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                                    }}
                                    unmountOnExit>

                                    <Fab>
                                        {fab.icon}
                                    </Fab>
                                </Zoom>
                            </>
                        )

                    })}
                </Grid>
            </Grid>

        </Grid>


    );
}
