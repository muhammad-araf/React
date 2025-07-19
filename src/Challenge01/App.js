import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Main from './Main';
import { DataProvider } from './DataProvider';
import Register from './Register';
import SignIn from './SignIn';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        {/* <h1>Hello</h1> */}
        <BrowserRouter>
        <DataProvider>
          <Routes>
            
            <Route path="/home" element={<Main/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/main' element={<Home/>}/>
          </Routes>
          </DataProvider>
      </BrowserRouter>
        

      </header>
    </div>
  );
}

export default App;
