import React from 'react';
import './App.css';
import Search from './components/Search/Search.container';
import List from './components/List/List.container';
import Nav from './components/Nav/Nav.container';

function App() {
  return (
    <div className="App column is-three-fifths is-offset-one-fifth">
      <Nav title="Weather App"/>
      <Search />
      <List />
    </div>
  );
}

export default App;
