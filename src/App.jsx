
import './App.css'
import {  Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Weather } from './componentss/Weather';
import { Nav } from './componentss/Nav';

function App () {

  return (
    <div className="App">
      <Nav/>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Weather' element={<Weather/>}/>
    <Route path='/apiDivisas' element={<ApiDivisas/>}/>
    
    </Routes>
    </div>
  )

}
export default App
