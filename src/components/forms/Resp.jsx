import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Puff } from 'react-loading-icons'
import axios from 'axios'
const Resp = () => {
  const [form,setF]=useState([]);
  const [loading,setL]=useState(false);
    const getData=async()=>{
        setL(true);
        try{
        const data=await axios.get('https://super-assi.onrender.com/v1/all');
        console.log(data.data);
        setF(data.data);}
        catch(err){
          alert("something went wrong")
          console.log(err);
        }
        setL(false);
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      <h1 className='text-center font-heading text-[20px]'>Forms</h1>
      {loading&&<div className='flex justify-center items-center'><Puff stroke="#98ff98" strokeOpacity={.125} speed={.75} /></div>}
      <div className='grid md:grid-cols-3 gap-4 my-3'>
        {!loading&&form.map((ele,index)=>{
          return <div className='flex flex-col justify-center items-center p-5 shadow-xl'
              key={index}>
              <img src={ele.img} width="100px" height="100px"/>
              <h1 className='font-heading'>{ele?.formName} </h1>
              <Link to={`/${ele._id}`}><button className='py-2 px-3 bg-black w-[200px]
                hover:text-black hover:bg-violet-700
                text-white'>Fill</button></Link>
              <h1><span className='font-heading'>Created by</span>: {ele.email}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default Resp