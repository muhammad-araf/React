import logo from './logo.svg';
import './App.css';
import ButtonEvent from './ButtonEvent';
import StateIn from './StateIn';
import CounterApp from './CounterApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Araf</h1>
        <CounterApp />



      </header>
    </div>
  );
}

export default App;
