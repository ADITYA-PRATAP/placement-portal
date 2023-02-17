import React from 'react'
import './coursePla.css'
import WE from '../coursespla/home.jpg'
import WE1 from '../coursespla/tv1.mp4'
import {AiOutlineArrowUp} from "react-icons/ai"
import CoursesPla2 from '../cousespla2/CoursesPla2'

const CoursePla = () => {
  return (
  <>
    <section id="o">
    <br/>
    <br/>
    <br/>
    

    
      
    <h1 id='k'>Courses for Placement</h1>
    <div className='paren'>
    
    <div className='child'>
      <div id="sf">
        <div id="dd">
        <video src={WE1} className="r"  controls="controls" autoPlay="true" />
        </div>
        
         
       
      </div>
    </div>
   
    <div className='child' >
    <img src={WE} className="animated" id="x"/>
    <h1 id="p" className='animated'>Swipe <AiOutlineArrowUp/></h1>
    </div> 
   

    </div>
      
    </section>
    <CoursesPla2/>
    
    </>
    
  )
}

export default CoursePla
