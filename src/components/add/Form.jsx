import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import Comp from './Comp';
import Category from './Category';
import Cloze from './Cloze';
import axios from 'axios';
import { Puff } from 'react-loading-icons'
const Form = () => {
  const navigate=useNavigate();
  const [name,setN]=useState("");
  const [email,setE]=useState("");
  const [filee,setF]=useState("");
  const [loading,setL]=useState(false);
  const [Comprehension,setCc]=useState([]);
  const [Categories,setCa]=useState([]);
  const [Clozee,setCl]=useState([]);
  const handleClick=async()=>{
    const formdata=new FormData();
    formdata.append('formName',name)
    formdata.append('email',email);
    setL(true);
    if(filee){
    formdata.append('files',filee);}
    formdata.append('Cat',JSON.stringify(Categories));
    formdata.append('Com',JSON.stringify(Comprehension));
    formdata.append('Cloze',JSON.stringify(Clozee));
    try{
      const data=await axios.post('https://super-assi.onrender.com/addForm',formdata);
      console.log(data);
      alert("submitted")
      navigate("/feedback")
    }catch(err){
      console.log(err);
      alert('Something went wrong please fill all the required fileds or try after sometime');
    }setL(false);
  }
  return (
    <div className='mt-[30px]'>
        <div className='flex justify-center'>
          <motion.h1 
            whileHover={{scale:0.7,}}
            className='bg-transparent font-heading  text-[30px] md:text-[50px]'>
            Create A Form
          </motion.h1>
        </div>
        <div className='flex flex-col  justify-around my-2 bg-yellow-200 rounded-lg p-2'>
        <div className='flex flex-col items-center'>
            <h1 className='font-heading'>Form Name*</h1>
            <input className='w-full mx-2 rounded h-[30px] pl-2' 
              value={name}
              onChange={(e)=>{setN(e.target.value);}}
              placeholder='Enter Form Name...'/>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-heading'>Email*</h1>
            <input className='w-full mx-2 rounded h-[30px] pl-2' 
              value={email}
              onChange={(e)=>{setE(e.target.value);}}
              placeholder='Enter Email...'/>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='font-heading'>Image</h1>
            <input type="file" onChange={(e)=>{
              setF(e.target.files[0]);
            }}
              className=' mx-2 rounded h-[30px]' />
          </div>
        </div>
        <div className='mx-3 shadow-2xl rounded-xl bg-yellow-200 p-4 font-thin'>
            <Cloze Clozee={Clozee} setCl={setCl}/>
            <Comp Comprehension={Comprehension} setCc={setCc}/>
            <Category Categories={Categories} setCa={setCa}/>
            <div className='flex justify-center'> 
            <motion.button whileHover={{scale:1.2}} 
                onClick={(e)=>{
                  e.preventDefault();
                  handleClick();
                }}
                className='sm:ml-[40px] ml-[10px] text-[20px] px-3 
                py-1 bg-black text-white rounded-xl hover:text-black
              hover:bg-violet-600'>{loading?<Puff/>:"Submit"}</motion.button></div>
        </div>
    </div>
  )
}

export default Form