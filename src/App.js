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
import ConditionalRendering from './ConditionalRendering';
import PassFunctionAsProp from './PassFunctionAsProp';
import TallyCounter from './TallyCounter';
import Hooks from './Hooks';
import UseCallBackHook from './UseCallBackHook';
import ContextGrandParent from './ContextGrandParent';
import Ref from './Ref';
import Mapping from './Mapping';
import CallingAPI from './CallingAPI';
import PrevProp from './PrevProp';
//  {useState} from 'react';
function App() {
  // const [name,setName] = useState("Araf");/  // function getData(){
  //   alert("Data Sent Successfully");
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <StateAndProps name={name}/>
        <button onClick={() => setName("Muhammad")}>Change Name</button> */}
        {/* <InputField /> */}
        {/* <InputFieldWithButton/> */}
        {/* <HideShowToggle/> */}
        {/* <FormHandling/> */}
        {/* <ConditionalRendering/> */}
        {/* <PassFunctionAsProp data={getData}/> */}
        {/* <TallyCounter/> */}
        {/* <Hooks/> */}
        {/* <UseCallBackHook/> */}
        {/* <ContextGrandParent/> */}
        {/* <Ref/> */}
        {/* <Mapping/> */}
        {/* <CallingAPI/> */}
        <PrevProp/>


      </header>
    </div>
  );
}

export default App;
