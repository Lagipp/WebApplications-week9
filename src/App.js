import logo from './logo.svg';
import './App.css';
import MyList from "./components/MyList.js";
import MyContainer from "./components/MyContainer.js";

function App() {
  return (
    <div className="App">
      <h1>
        Hello World!
      </h1>
      <h3>
        <MyContainer></MyContainer>
        <MyList></MyList>
      </h3>
    </div>
  );
}

export default App;
