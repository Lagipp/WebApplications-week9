import './App.css';
import MyList from "./components/MyList";
import MyContainer from "./components/MyContainer";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>
        Hello World!
      </h1>
      <h3>
        <MyContainer />
      </h3>
    </div>
  );
}

export default App;
