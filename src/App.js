import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './containers/Main';
import Detail from './containers/Detail';
import Content from './containers/Content';

import './styles/App.scss';
import './styles/Background-Sky.scss';
import Mypage from './containers/Mypage';
import DetailNew from './containers/DetailNew';
import Login from './containers/Login';

function App() {
  const [session, setSession] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [helpComment, setHelpComment] = useState(false);

  return (
    <Router>
      <Routes>
        {session?
          <Route path="/" exact={true} element={<Main addComment={addComment}  setAddComment={setAddComment} />} />:
          <Route path="/" exact={true} element={<Login setSession={setSession} />} />
        }
        <Route path="/Content" exact={true} element={<Content setAddComment={setAddComment} />} />
        <Route path="/Detail" exact={true} element={<Detail setHelpComment={setHelpComment} />} />
        <Route path="/DetailNew" exact={true} element={<DetailNew setAddComment={setAddComment} />} />
        <Route path="/Mypage" exact={true} element={<Mypage helpComment={helpComment} addComment={addComment} setSession={setSession}/>} />
      </Routes>
    </Router>
  );
}

export default App;