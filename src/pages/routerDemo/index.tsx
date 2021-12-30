/*
 * @Author: xiangliang
 * @Date: 2021-12-03 11:32:47
 * @LastEditTime: 2021-12-08 16:21:33
 * @Description:路由器示例
 */
import React, { Suspense } from "react";
import { withStyles } from "@material-ui/core";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleCategoryPage, ArticleDetailPage, ArticlePage, LoginPage } from "../asyncPage";
import Article from "./pages/Article/Article";


const styles = (theme: any) => ({

});

const RouterDemo = (props: any) => {
    return (
        <>
            <Layout>
                <Suspense fallback={<h1>loading</h1>}>
                    <Routes>
                        <Route path="article" element={<ArticlePage />} > </Route>
                        <Route path="article/category/:id" element={<ArticleCategoryPage />} />
                        <Route path="article/detail/:id" element={<ArticleDetailPage />} />
                    </Routes>
                </Suspense>
            </Layout>
        </>
    )
}

export default withStyles(styles as any)(RouterDemo);