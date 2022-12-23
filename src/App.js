import React from "react";
import Home from "./screens/home";
import {Nav} from '../src/componentss/Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homes } from "./componentss/Home";
import { Weather } from "./componentss/Weather";
import { ApiDivisas } from "./componentss/apiDivisas";
import Library from "./screens/library";
import Player from "./screens/player";
import './index.css';
export default function App() {
  return (
    <div className="App2">
      <Nav/>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homes/>}/>
    <Route path='/Homes' element={<Home/>}/>
    <Route path='/Weather' element={<Weather/>}/>
    <Route path='/apiDivisas' element={<ApiDivisas/>}/>
    <Route path="/Library" element={<Library />} />
    <Route path="/player" element={<Player />} />
    </Routes> 
  </BrowserRouter>
    {/*   <Home /> */}
    </div>
  );
}
