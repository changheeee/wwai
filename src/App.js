import React, { useState } from 'react';
import './App.css';

import { Route } from 'react-router-dom'
import Main from './main';
import QnAi from './component/qnai';
import Community from './component/community';
import News from './component/news';
import Event from './component/event';
import Notice from './component/notice';
import Login from './component/login'
import Header from './header';
import { PostProvider } from './context';

function App() {

  return (
    <>
      <PostProvider>
        <Header />
        <div className='sub'>
          <Route path='/' exact={true} component={Main} />
          <Route path="/component/qnai" component={QnAi} />
          <Route path="/component/community" component={Community} />
          <Route path="/component/news" component={News} />
          <Route path="/component/event" component={Event} />
          <Route path="/component/notice" component={Notice} />
          <Route path="/component/login" component={Login} />
        </div>
      </PostProvider>
    </>
  );
}

export default App;
