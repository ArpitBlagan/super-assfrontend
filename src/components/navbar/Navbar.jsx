import React from 'react'
import {easeIn, motion} from 'framer-motion'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <motion.div 
    initial={{scale:0,y:200}}
    animate={{scale:1,y:0}}
    transition={{transition:easeIn,delay:0.3,duration:1.4}}
    className=' mx-4 rounded-2xl
    sm:mx-[100px] shadow-2xl px-4 sm:px-[50px] flex justify-between items-center'>
        <Link to="/"><motion.h1 whileHover={{scale:1.1}}
        className='font-heading text-[40px] sm:text-[50px] text-violet-700'>FORMS.</motion.h1></Link>
        <Link to="/add"><motion.h1 whileHover={{scale:1.2}}
            className='font-heading underline'>Create Form</motion.h1></Link>
    </motion.div>
  )
}

export default Navbar