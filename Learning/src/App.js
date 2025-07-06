import logo from './logo.svg';
import './App.css';
import ButtonEvent from './ButtonEvent';
import StateIn from './StateIn';
import CounterApp from './CounterApp';
import PropsIn from './PropsIn';
import StateAndProps from './StateAndProps';
import React,{useState} from 'react';
import InputField from './InputField';
import InputFieldWithButton from './InputFieldWithButton';
import HideShowToggle from './HideShowToggle';
import FormHandling from './FormHandling';
//  {useState} from 'react';
function App() {
  const [name,setName] = useState("Araf");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <StateAndProps name={name}/>
        <button onClick={() => setName("Muhammad")}>Change Name</button> */}
        {/* <InputField /> */}
        {/* <InputFieldWithButton/> */}
        {/* <HideShowToggle/> */}
        <FormHandling/>

      </header>
    </div>
  );
}

export default App;
