/*
 * @Author: xiangliang
 * @Date: 2021-11-04 14:50:19
 * @LastEditTime: 2021-11-04 16:26:57
 * @Description:
 */
import React, { useState } from "react";
import { Checkbox, FormControlLabel, Grid } from "@material-ui/core"
import { FavoriteBorder, Favorite } from "@material-ui/icons";

export default function CheckboxDemo() {
    const [checked, setChecked] = useState<boolean>(true);

    function handleChange() {
        setChecked(!checked)
    }

    return (
        <>
            <Grid container direction="column">
                <Grid item>
                    <Checkbox checked={checked} onChange={handleChange}></Checkbox>
                    <Checkbox color="primary"></Checkbox>
                    <Checkbox color="default"></Checkbox>
                    <Checkbox indeterminate></Checkbox>
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        label="Custom icon"
                    />
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                        label="Custom icon"
                        labelPlacement="top"
                    />
                </Grid>
            </Grid>
        </>
    )
}