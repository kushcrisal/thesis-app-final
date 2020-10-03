import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Search from './component/search'
import Student from './component/student'
import Resultlist from './component/resultlist'
import studentdetails from './component/studentdetails'
import studentlist from './component/studentlist'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
//try try try

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/student" exact component={Student}/>
      <Route path="/Search" exact component={Search}/>
      <Route path="/studentlist" exact component={studentlist}/>
      <Route path="/studentdetails" exact component={studentdetails}/>
      <Route path="/resultlist" exact component={Resultlist}/>


      </Switch>

      
    </div>
    </Router>
  );
}

const Home=() =>
(
  <div>
   <h1> Homepage</h1>
  </div>

);

export default App;
