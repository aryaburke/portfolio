import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Poems from './pages/Poems';
import Home from './pages/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/poems/" component={Poems} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
