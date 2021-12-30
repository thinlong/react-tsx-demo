/*
 * @Author: xiangliang
 * @Date: 2021-11-04 14:39:21
 * @LastEditTime: 2021-11-04 14:46:12
 * @Description:
 */

import { Button, ButtonGroup, Grid } from "@material-ui/core";

export default function ButtonGroupDemo() {

    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <ButtonGroup>
                        <Button>one</Button>
                        <Button>two</Button>
                        <Button>three</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item>
                    <ButtonGroup orientation="vertical">
                        <Button>one</Button>
                        <Button>two</Button>
                        <Button>three</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </>
    )
}