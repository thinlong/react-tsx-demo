/*
 * @Author: xiangliang
 * @Date: 2021-12-20 13:56:34
 * @LastEditTime: 2021-12-20 18:08:08
 * @Description: 
 */
import { ListItem, ListItemText, withStyles } from "@material-ui/core"
import React from "react"
import { FixedSizeGrid as Grid } from "react-window"

const stylesCommon = (theme: any) => ({
    root: {
        background: 'blue'
    }
})


const styles = (theme: any) => ({
    itemHeader: {
        borderBottom: '1px solid gray'
    },
    ...stylesCommon(theme)
})


const ReactWindow = (props: any) => {
    const { classes } = props;

    const data = {
        header: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        data: [
            [1, 2, 3, 4, 5, 6],
            [11, 12, 13, 14, 15, 16],
        ]
    }


    const ItemRender = (itemData: any) => {
        const { data, columnIndex, rowIndex, style } = itemData;
        console.log(555, classes);
        let labId = `tebleRende-${rowIndex}-${columnIndex}`;
        // console.log('ItemRender', data)
        return (
            <ListItem key={labId} className={classes.itemHeader} style={style} >
                <ListItemText>{data.data[rowIndex][columnIndex]}</ListItemText>
            </ListItem>
        )
    }

    const Cell = (itemData: any) => {
        const { data, columnIndex, rowIndex, style } = itemData;
        console.log("rrrr", classes);
        // console.log('iiii', i);
        if (rowIndex === 0) {
            return (
                <div
                    style={style}
                >
                    {/* {data.header[columnIndex]} */}
                    {'h1'}
                </div>
            )
        } else {
            // console.log(rowIndex, columnIndex, data.data);
            return (
                <div
                    // className={
                    //     columnIndex % 2
                    //         ? rowIndex % 2 === 0
                    //             ? 'GridItemOdd'
                    //             : 'GridItemEven'
                    //         : rowIndex % 2
                    //             ? 'GridItemOdd'
                    //             : 'GridItemEven'
                    // }
                    style={style}
                >
                    {data.data[rowIndex - 1][columnIndex]}
                </div>

                // <div style={style}>dd</div>

            )
        }
    };

    return (
        <>
            <Grid
                className={classes.root}
                columnCount={data.header.length}
                columnWidth={100}
                width={1000}

                rowCount={data.data.length}
                rowHeight={40}
                height={800}

                itemData={data}
            >
                {ItemRender}
            </Grid>

            {/* <Grid
                className="Grid"
                columnCount={data.header.length}
                columnWidth={100}
                height={600}
                rowCount={data.data.length + 1}
                rowHeight={35}
                width={700}
                itemData={data}
            >
                {Cell}
            </Grid> */}
        </>
    )
}

export default withStyles(styles as any)(ReactWindow);