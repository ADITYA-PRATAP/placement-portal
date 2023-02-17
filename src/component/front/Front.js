import React from 'react'
import './front.css'
import ME from './plac1.png'
import Me1 from './stu1.jpg'
import Me2 from './50lac.jpg'
import Me3 from './49 lac.jpg'
import Me4 from './48lac.jpg'





const Front = () => {
 
  return (
    
    <section id="placed">
    <br/>
      <h1 id='ad'>Placed Student</h1>
      <div className='parent'>
        <div className='child1'>
        {/* <h1>section1</h1> */}
        <img src={ME} className='f'></img>
        


        </div>
        <div className='child2'>
        {/* <h1>
          section2
        </h1> */}
        
        <div className='chil'>
        <div className='chi'>
        <img src={Me1} className='stu1'></img>

        </div>
        <div className='chi'>
        <img src={Me2} className='stu1'></img>

        </div>
        <div className='chi'>
        <img src={Me3} className='stu1'></img>

        </div>
        <div className='chi'>
        <img src={Me4} className='stu1'></img>

        </div>
        </div>

        </div>
      </div>
    </section>
   
      
    
  )
}

export default Front
