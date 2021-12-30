/*
 * @Author: xiangliang
 * @Date: 2021-12-23 15:52:00
 * @LastEditTime: 2021-12-27 18:29:38
 * @Description: 
 */

import { Button, withStyles } from "@material-ui/core";

const styles = (theme: any) => ({

})

const NginxComponet = (props: any) => {

    const requestCommon = () => {
        fetch('http://127.0.0.1:80/api/test/user?id=1').then(res => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        })
    };

    return (
        <>
            <Button variant="outlined" onClick={requestCommon}>普通请求</Button>
        </>
    )
}

export default withStyles(styles as any)(NginxComponet);