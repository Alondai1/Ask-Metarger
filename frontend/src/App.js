import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './cmps/Header'
import Ask from './pages/Ask';

import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';





function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/ask" component={Ask} exact />
          <Route path="/" component={Home} exact />
        </Switch>


      </Router>
    </div>
  );
}

export default App;
