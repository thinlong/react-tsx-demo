/*
 * @Author: xiangliang
 * @Date: 2021-11-25 10:59:16
 * @LastEditTime: 2021-12-23 17:48:04
 * @Description:配置页面组件的异步加载
 */

import { lazy } from 'react';


export const HomePage = lazy(() => import('../pages/home'));
export const LoginPage = lazy(() => import('../pages/login'));
export const RouterDemoPage = lazy(() => import('../pages/routerDemo/'));
export const ArticlePage = lazy(() => import('../pages/routerDemo/pages/Article/Article'));
export const ArticleCategoryPage = lazy(() => import('../pages/routerDemo/pages/Article/ArticleCategory'));
export const ArticleDetailPage = lazy(() => import('../pages/routerDemo/pages/Article/ArticleDetail'));
export const PractisePage = lazy(() => import('../pages/practise/'));
export const OptaPage = lazy(() => import('../pages/opta'));
export const NginxPage = lazy(() => import('../pages/nginx'));
export const NotFoundPage = lazy(() => import('../pages/notfound'));