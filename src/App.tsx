/*
 * @Author: xiangliang
 * @Date: 2021-11-03 16:08:35
 * @LastEditTime: 2021-12-23 17:48:13
 * @Description: 
 */

import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import './App.css';
// 导入iconfont
import "./libs/iconfont/iconfont.css";

import ThemeWrapper from './app/ThemeWrapper';
import {
  ArticleCategoryPage, ArticleDetailPage, ArticlePage,
  HomePage, LoginPage, RouterDemoPage, OptaPage,
  PractisePage, NginxPage, NotFoundPage
}
  from './pages/asyncPage';
class App extends React.Component {

  render() {
    return (
      < ThemeWrapper>
        {/* <RW></RW> */}
        <Router>
          <Suspense fallback={<h1>loading</h1>}>
            <Routes>
              <Route path="/main" element={<RouterDemoPage />} >
                {/* <Route path="article" element={<ArticlePage />} />
                <Route path="article/category/:id" element={<ArticleCategoryPage />} />
                <Route path="article/detail/:id" element={<ArticleDetailPage />} /> */}
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/opta" element={<OptaPage />} />
              <Route path="/practise" element={<PractisePage />} />
              <Route path="/nginx" element={<NginxPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeWrapper>
    )
  }
}

export default App;
