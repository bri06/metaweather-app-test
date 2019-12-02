import React from 'react';
import './App.css';
import Search from './components/Search/Search.container';
import List from './components/List/List.container';

function App() {
  return (
    <div className="App">
      <Search />
      <List />
    </div>
  );
}

export default App;
