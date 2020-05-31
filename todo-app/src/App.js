import React from 'react';
import * as classes from './App.module.css'
import NavBar from './Components/NavBar/NavBar';
import TodoInputContainer from './Containers/TodoInputContainer/TodoInputContainer';

function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <TodoInputContainer />
    </div>
  );
}

export default App;
