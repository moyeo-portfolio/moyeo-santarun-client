import React, { createContext, useContext, useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import classnames from 'classnames';
import './styles/App.scss';
import './styles/Background-Sky.scss';

import Main from './containers/Main';
import Detail from './containers/Detail';
import Content from './containers/Content';
import Mypage from './containers/Mypage';
import Login from './containers/Login';

import { SessionContext } from './utils/session';
import { baseUrl } from './utils/baseUrl';
import background from './assets/background.png';

export default function App() {
  const [session, setSession] = useState(false);

  return (
    <SessionContext.Provider value={{ session: false, setSession: ()=>setSession(!session)}}>
      <Router>
        <div className={classnames("intro", {
          "session": !session,
        })}>
          <Routes>
            {session?
              <>
                <Route path={baseUrl} element={<Main />} />
                <Route path={baseUrl+"/Content"} element={<Content />} />
                <Route path={baseUrl+"/Detail"} element={<Detail />} />
                <Route path={baseUrl+"/Mypage"} element={<Mypage />} />
              </>:
              <Route path={baseUrl} element={<Login />} />
            }
          </Routes>
        </div>
        <img id="root-background" src={background} />
      </Router>
    </SessionContext.Provider>
  );
}
