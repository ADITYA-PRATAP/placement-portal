
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";
import Login from './component/login/Login'

// import "./Profilr";

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import CoursePla from './component/coursespla/CoursePla';
import Home from './component/home/Home';
// import { Route,Switch} from "react-router-dom";
// import CoursePla from './component/coursespla/CoursePla';
import Nav from '../src/component/nav/Nav'
import Contact from "./component/Contact/Contact"

AOS.init();

const App= ()=> {
  return (
  
    <>
    
      <Router>
      {/* <Home/> */}
      <Nav/>
    
       <Routes>
      <Route path="/" element={<Login/>}></Route>

       <Route exact path="/home" element= {<Home/>} />
      <Route path="/Contact" element= {<Contact/>} />
      <Route path="/course" element= {<CoursePla/>} />
       </Routes>
      </Router>
      
    </>
   
  
  );
}

export default App;
