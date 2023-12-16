import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import form from '/form.png';
const Main = () => {
  return (
    <div className='mx-4 mt-[100px] flex justify-around'>
      <div className='font-heading text-[60px]'>
          <h1 className='sm:ml-[20px] mt-[50px] sm:mt-[140px] sm:text-[100px] text-violet-700 '>Form Creater.</h1>
          <p className='sm:ml-[20px] text-[30px]'>User can 
            <motion.span whileHover={{}} className='text-violet-700'> create
            </motion.span> a Form and  also submit<br/> their <motion.span className='text-violet-700'>response.</motion.span></p>
          <div>
              <Link to="add"><motion.button whileHover={{scale:1.2}} 
                className='sm:ml-[40px] ml-[10px] text-[20px] px-3 
                py-1 bg-black text-white rounded-xl hover:text-black
              hover:bg-violet-600'>Create One</motion.button>
              </Link>
              <Link to="/feedback"><motion.button whileHover={{scale:1.2}} 
                className='sm:ml-[40px] ml-[10px] text-[20px] px-3 
                py-1 bg-black text-white rounded-xl hover:text-black
              hover:bg-violet-600'>Give Feedback</motion.button>
              </Link>
          </div>
      </div>
      <div className='flex justify-center items-center'>
        <img src={form} width='100px' height='100px'/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Main