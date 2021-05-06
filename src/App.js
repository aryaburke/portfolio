import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Poems from './pages/Poems';
import Stories from './pages/Stories';
import Code from './pages/Code';
import Ruminations from './pages/Ruminations';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/poems/" component={Poems} />
          <Route exact path="/stories/" component={Stories} />
          <Route exact path="/code/" component={Code} />
          <Route component={Ruminations} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
