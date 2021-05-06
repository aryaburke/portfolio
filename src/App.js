import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Poems from './pages/Poems';
import Stories from './pages/Stories';
import Home from './pages/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/poems/" component={Poems} />
          <Route exact path="/stories/" component={Stories} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
