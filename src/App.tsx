import React, { useState } from 'react';
import './reset.css'
import './App.css';
import Landing from './components/Landing'
import Header from './components/Header'
import Login from './components/Login'



function App() {
  const [displayLogin, setDisplayLogin] = useState(false)

  const showLogin = () => {
    setDisplayLogin(true)
    // console.log(displayLogin)
  }

  const hideLogin = () => {
    setDisplayLogin(false)
  }

  return (
    <div className={(displayLogin) ? 'app' : 'app-dimmed'}>
      <Header hideLogin={hideLogin} showLogin={showLogin} displayLogin={displayLogin} />
      {displayLogin ? <Login /> : null}
      <Landing hideLogin={hideLogin} />
    </div>
  );
}

export default App;
