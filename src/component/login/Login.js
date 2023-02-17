 import React from 'react'
 import './login.css'
 import AVA from './Nomads\ -\ Avatar.png'
 import PIC from './ad.png'
//  import {useHistory} from "react-router-dom";
 
 const Login = () => {
  // let history =useHistory();
  // history.push('')
  
  return (
    <section id='full'>
     <div id='login'>

     <div id="login2">

     <h1 id="name">Login</h1>
     <div className='ro'>
     <img src={AVA} className="ro1"></img>
     
     </div>
     <input className="slider" type="text" placeholder='email or mobile number'></input><br></br>
     <input className="slider" type="text" placeholder='password'></input><br></br>
     
    

     

     <button id='slide1' >Submit</button>
     </div>

     <div id='a'>
    <h1 id='as'>Best Job Placement <h2 data-aos={"fade-left"}>Sites</h2></h1>
    <div className='text'><small >Do you need a job where your knowledge and skills are needed? Job placement sites connect people with jobs and enable them to find new professions. Job placement sites look for the best employment matches based on skills and interests.</small></div>
        <img src={PIC} className="ad"></img>
        
    </div>

       
     </div>
     </section>
   )
 }
 
 export default Login
 