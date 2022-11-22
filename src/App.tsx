import React, { useState } from 'react';
import classnames from 'classnames';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './containers/Main';
import Detail from './containers/Detail';
import Content from './containers/Content';
import './styles/App.scss';
import './styles/Background-Sky.scss';

import Mypage from './containers/Mypage';
import Login from './containers/Login';

import background from './assets/background.png';

function App() {
  const [session, setSession] = useState<boolean>(false);
  const [addComment, setAddComment] = useState<boolean>(false);
  const [helpComment, setHelpComment] = useState<boolean>(false);

  return (
    <Router>
      <div className={classnames("intro", {
        "session": !session,
      })}>
        <Routes>
          {session?
            <Route path="/" element={<Main />} />:
            <Route path="/" element={<Login setSession={setSession} />} />
          }
          <Route path="/Content" element={<Content setAddComment={setAddComment} />} />
          <Route path="/Detail" element={<Detail setHelpComment={setHelpComment} />} />
          <Route path="/Mypage" element={<Mypage helpComment={helpComment} addComment={addComment} setSession={setSession}/>} />
        </Routes>
      </div>
      <img id="root-background" src={background} />
    </Router>
  );
}

export default App;