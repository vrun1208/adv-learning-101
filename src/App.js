import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import './App.css';
import Makedropdown from './components/adv-dropdown';
import Card from './components/auth';
import Dir from './components/directory';
import DropDown from './components/dropdown';
import Pagi from './components/pagination';
import StopWatch from './components/stopwatch';


const Home = () => <h1>Home</h1>;
//const Auth = () => <h1>Auth</h1>;
const Misc = () => <h1>Misc</h1>;

export default function App() {
  return(
    <Router>
      <div className='App'>
        <nav className='links'>
          <li className='list'>
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/auth">Auth</Link>
            </ul>
            <ul>
              <Link to="/drop">drop-down</Link>
            </ul>
            <ul>
              <Link to="/dropdown">advanced-dropdown</Link>
            </ul>
            <ul>
              <Link to="/dir">folders</Link>
            </ul>
            <ul>
              <Link to="/page">Page</Link>
            </ul>
            <ul>
              <Link to="/stopwatch">stop-watch</Link>
            </ul>
            <ul>
              <Link to="/misc">Misc</Link>
            </ul>
          </li>
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} /> 
          <Route path="/auth" Component={Card} /> 
          <Route  path="/drop" Component={DropDown} />
          <Route  path="/dropdown" Component={Makedropdown} /> 
          <Route  path="/dir" Component={Dir} /> 
          <Route exact path="/page" Component={Pagi} /> 
          <Route exact path="/stopwatch" Component={StopWatch} /> 
          <Route  path="/misc" Component={Misc} /> 
        </Routes>
          
        
      </div>
    </Router>
  )
}
