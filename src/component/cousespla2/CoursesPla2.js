import React from 'react'
import './coursespla2.css';
import W from '../cousespla2/dsa.png'
import R from './java.jpg';
import G from './Mern.png';
import J from './c++.png';
import Course  from '../course/Course';

const CoursesPla2 = () => {
  return (
    <section id='m'>
    <div className='par'>
    <div></div>

    <div className='place1'>
        <div className='pla'>
            <div className='pla1'>
            <img src={J} className='J'></img>
            </div>
            <a href='https://www.w3schools.com/cpp/cpp_intro.asp#:~:text=C%2B%2B%20is%20an%20object%2Doriented,fun%20and%20easy%20to%20learn!'><button className='btn'>Learn it</button></a>
            <p>C++ Programming Fundamentals</p>
        </div>

        <div className='pla'>
        <div className='pla1'>
        <img src={G} className='J'></img>
        </div>
        <a href='https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,a%20client%2Dside%20JavaScript%20framework'><button className='btn'>Learn it</button></a>
        <p> MongoDB, Express, React, Node, after the four key technologies that make up the stack</p><br/>
        </div>

        <div className='pla'>
        <div className='pla1'>
        <img src={R} className='J'></img>
        </div>
        
        <a href='https://www.w3schools.com/java/default.asp'><button className='btn'>Learn it</button></a>
        <p>Java Programming<br/> Fundamentals</p>
        </div>

        <div className='pla'>
        <div className='pla1 '>
            <img src={W} className='J'></img>
        </div>
        
        <a href='https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/'><button className='btn'>Learn it</button></a>
        <p>This DSA course Help <br/>you to crack Interview</p>
        </div>

    </div>

    </div>
    <Course/>

    </section>   
  )
}

export default CoursesPla2
