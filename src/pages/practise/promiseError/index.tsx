/*
 * @Author: xiangliang
 * @Date: 2021-12-23 14:27:54
 * @LastEditTime: 2021-12-23 15:04:59
 * @Description: 
 */
import { Button } from "@material-ui/core";
import React from "react";
import FontFaceObserver from 'fontfaceobserver';

const PromiseErrorComponent = () => {
    const creatPromise = () => {
        return new Promise((resole, reject) => {
            setTimeout(() => {
                reject(new Error("你错啦"));
            }, 2000)
        });

    }
    const aa = () => {
        const openSansObserver = new FontFaceObserver('Open Sans', {});
        return new Promise((resole, reject) => {
            openSansObserver.load().then(res => {
                console.log("loaded", res);
            }).catch(e => {
                console.log('load err 555', e);
                // reject(e);
            }).finally(() => {
                console.log("finally 666");
            });
        })
    }

    const handleClick = () => {
        console.log('new');
        aa().then(res => { }).catch(e => {
            console.log("gggg", e);
        });
        creatPromise().then(res => {
            console.log("res", res)
        }).catch(e => {
            console.log("err", e);
        }).finally(() => {
            console.log("finally");
        });
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClick}>New Promise</Button>
        </>
    )
}

export default PromiseErrorComponent;