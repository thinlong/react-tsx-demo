/*
 * @Author: xiangliang
 * @Date: 2021-11-03 20:37:18
 * @LastEditTime: 2021-11-05 17:01:34
 * @Description:展示各种组件
 */

import { Grid } from "@material-ui/core"
import EvtCollectList from "../project/EvtCollectList"
import data from "../../../mock/eventColletionList.json"

function Content() {
    console.log("json data", data);
    return (
        <>
            <Grid container direction="column">
                <a>RRR</a>
                {/* <ListDemo /> */}
                <EvtCollectList />
            </Grid>
        </>
    )
}

export default Content