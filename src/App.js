//import css
import './App.css';

//import react router dom
import {  BrowserRouter, Routes, Route} from 'react-router-dom'

//import Home page
import { Home } from './pages/Home';

//import Navbar
import { Navbar } from './components/Navbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>


      </BrowserRouter>
      
    </div>
  );
}

export default App;
