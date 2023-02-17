import React from 'react'
import './course.css';
// import Mr2 from './footer.png';
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
// import {AiFillTwitterCircle} from 'react-icon/ai'

const Course = () => {
  return (
    <div>
    <section id="courses">
    
    {/* <img src={Mr2} className='mr2'></img> */}
    <div className='about'>
    <div className='lu'><h1>About</h1>
    <br/>
    <a className='df'>Our moto</a><br/>
    <a  className='df'>Our Team</a><br/>
    <a  className='df'>Who are we</a><br/>
    
    
    
    
    </div>
    <div className='lu'><h1>Find us</h1><br/>
    <a className='df'>Location</a><br/>
    <a  className='df'>Privacy</a><br/>
    <a  className='df'>Terms & Condition</a><br/></div>


    <div className='lu'><h1>Quick link</h1><br/>
    <a className='df'>Course</a><br/>
    <a  className='df'>Placement</a><br/>
    
    
    
    </div>
    <div className='lu'><h1>Follow us</h1><br/>
    <a ><AiFillFacebook className='j'/></a><br/>
    <a><AiFillGithub className='j'/></a><br/>
    <a><AiFillInstagram className='j'/></a><br/>
    {/* <a><AiFillTwitterCircle className='j'/></a> */}
    
    
    
    </div>
    </div>
    
    

    </section>

      
    </div>
  )
}

export default Course
