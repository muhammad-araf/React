import logo from './logo.svg';
import './App.css';
import ButtonEvent from './ButtonEvent';
import StateIn from './StateIn';
import CounterApp from './CounterApp';
import PropsIn from './PropsIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Araf</h1> */}
        <PropsIn name={"Araf"}/>



      </header>
    </div>
  );
}

export default App;
