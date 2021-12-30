/*
 * @Author: xiangliang
 * @Date: 2021-11-03 17:24:23
 * @LastEditTime: 2021-11-05 18:05:01
 * @Description: 
 */
import { styled, Table as TableUI, TableCell, TableSortLabel, TableContainer, TableHead, TableBody, TableRow, withStyles, ButtonGroup, Icon, IconButton, Typography, Grid } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
// import styles from './styles/evtCollectList-jss';
// import styles from './styles/mainToolbar-jss';
// import { Paper} from 'material-ui';
import * as React from 'react';
import { useState } from 'react';
import { isTemplateExpression } from 'typescript';
import { types } from 'util';
// import { injectIntl } from 'react-intl';
// import { withRouter } from 'react-router-dom';
import eventCollectionData from "../../../mock//eventColletionList.json";

const styles = withStyles({

});


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// 采集状态
enum COLLECT_STATUS {
    FAIL,
    SUCCESS,
    DOING,
    STOP
}

function getStatusIcon(status: COLLECT_STATUS) {
    let icon = null;
    switch (status) {
        case COLLECT_STATUS.FAIL:
            icon = CancelIcon;
            break;
        default:
            break;
    }
    return icon;
}

function getStatusText(status: COLLECT_STATUS): string {
    let text = "";
    if (status == COLLECT_STATUS.FAIL) {
        text = "采集失败"
    } else if (status == COLLECT_STATUS.SUCCESS) {
        text = "采集成功";
    } else if (status == COLLECT_STATUS.DOING) {
        text = "采集中";
    } else if (status == COLLECT_STATUS.STOP) {
        text = "采集停止";
    }
    return text;
}


// 事件采集列表项
interface IEventCollectItem {
    eventCollectionId: number,
    name: string,
    vehicleCount: number,
    createTime: string,
    triggerTime: string,
    stopTime: string,
    status: COLLECT_STATUS
}

const rows: any = [];

/**
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *例子：
 *(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
function formatDate(date: Date, fmt: string) {
    var o: any = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function dateFormat(dateStr: string) {
    return dateStr.substr(0, 19).replace("T", " ");
}

function getDate(date: string): string {
    // "2018-02-19T12:00:00"
    const d: Date = new Date(date);
    console.log("data", d.toISOString().substr(0, 19).replace("T", " "));
    return formatDate(d, "yyyy-MM-dd hh:mm:ss");
}

console.log("aaaa", getDate("2021-11-03T08:05:42.815Z[UTC]".replace("[UTC]", "")));

function handleItemClick(item: any) {
    console.log(item);
}

// 排序方式
enum Direction {
    asc = "asc",
    desc = "desc"
}

const EvtCollectList = () => {
    const [orderCreate, setOrderCreate] = useState(Direction.asc);
    const listData: IEventCollectItem[] = eventCollectionData.elemnts;

    // 改变创建时间排序
    function handCreateOrder() {
        console.log("change order");
        if (orderCreate === "asc") {
            setOrderCreate(Direction.desc);
        } else {
            setOrderCreate(Direction.asc);
        }
    }


    return (
        <div>
            <TableUI aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography>事件名称</Typography> </TableCell>
                        <TableCell>VIN数</TableCell>
                        <TableCell align="left"><TableSortLabel direction={orderCreate} onClick={handCreateOrder}>创建时间</TableSortLabel></TableCell>
                        <TableCell align="left">触发开始时间</TableCell>
                        <TableCell align="left">触发停止时间</TableCell>
                        <TableCell align="left">采集状态</TableCell>
                        <TableCell align="center">操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listData.map((row) => (
                        <StyledTableRow key={row.name}>
                            <TableCell onClick={() => { handleItemClick(row) }} align="left" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.vehicleCount}</TableCell>
                            <TableCell align="left">{dateFormat(row.createTime)}</TableCell>
                            <TableCell align="left">{dateFormat(row.triggerTime)}</TableCell>
                            <TableCell align="left">{dateFormat(row.stopTime)}</TableCell>
                            <TableCell align="left">
                                <Grid container>
                                    <Grid item>
                                        {row.status == COLLECT_STATUS.SUCCESS ? <CheckCircleIcon color="secondary" fontSize="small" /> : null}
                                        {row.status == COLLECT_STATUS.FAIL ? <CancelIcon color="secondary" fontSize="small" /> : null}
                                        {row.status == COLLECT_STATUS.DOING ? <PauseCircleFilledIcon color="secondary" fontSize="small" /> : null}
                                        {row.status == COLLECT_STATUS.STOP ? <PlayCircleFilledIcon color="secondary" fontSize="small" /> : null}
                                    </Grid>
                                    <Grid item><Typography>{getStatusText(row.status)}</Typography></Grid>
                                </Grid>

                            </TableCell>
                            <TableCell align="center">
                                <IconButton>
                                    <PhotoCamera />
                                </IconButton>
                                <a>|</a>
                                <IconButton>
                                    <PhotoCamera />
                                </IconButton>
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </TableUI>
        </div>
    );
}

export default EvtCollectList;