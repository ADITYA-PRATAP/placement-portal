import React from 'react'
import {HiHome} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineContactMail} from 'react-icons/md'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    
    <nav>
    <Link to="/" className='active'>Home<HiHome className='s'/></Link>
    <Link to="/home">About<AiOutlineUser className='s'/></Link>
    <Link to="/course">Courses<BiBook className='s'/></Link>
    
    <Link to="/Contact">Contact<MdOutlineContactMail className='s'/></Link>
    </nav>
      
    
  )
}

export default nav
