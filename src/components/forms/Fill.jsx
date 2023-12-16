import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cat from './Cat';
import Clo from './Clo';
import Comp from './Comp';
import { Puff } from 'react-loading-icons'
import {motion} from 'framer-motion'
const Fill = () => {
    const navigate=useNavigate();
    const [loading,setL]=useState(false);
    const {id}=useParams();
    const [name,setN]=useState("")
    const [ansCat,setCat]=useState([]);
    const [ansCloze,setCloze]=useState([]);
    const [ansComp,setComp]=useState([]);
    const [ques,setQ]=useState(null);
    const getData=async()=>{
        try{
            const data=await axios.get(`https://super-assi.onrender.com/v1/getForm/${id}`);
            console.log(data);setQ(data.data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getData();
    },[]);
    if(ques==null){return <div className='text-center'>Loading...</div>}
    const handleClick=async()=>{
        setL(true);
        if(name==""){setL(false);alert("Enter your Name");}
        const formdata=new FormData();
        formdata.append('name',name);
        formdata.append('form_id',id);
        formdata.append('comp',JSON.stringify(ansComp));
        formdata.append('cloze',JSON.stringify(ansCloze));
        formdata.append('cat',JSON.stringify(ansCat));
        try{
            const data=await axios.post('https://super-assi.onrender.com/v1/userRes',formdata);
            console.log(data);
            alert("response recordered");
            navigate("/");
        }catch(err){
            console.log(err);
            alert("Something went wrong");
        }setL(false);
    }
  return (
    <div>
        <div className='flex flex-col justify-center items-center  my-3'>
            <img src={ques.img} alt="default" className='w-[80px] h-[70px] object-fil' />
            <h1 className='font-heading'>{ques.formName}*</h1>
            <button 
                onClick={(e)=>{
                    e.preventDefault();
                    const url = window.location.href; 
                    navigator.clipboard.writeText(url)
                         .then(() => {
                                alert('URL copied to clipboard');
                        })
                        .catch((err) => {
                                console.error('Unable to copy URL', err);
                        });
                }}
                className='px-3 
                py-1 bg-black text-white rounded-xl hover:text-black
              hover:bg-violet-600'>Copy Link</button>
        </div>
        <div className='my-2 bg-yellow-100 shadow-2xl p-2'>
            <h1 className='font-heading'>Name*</h1>
            <input value={name} 
                className='pl-3 rounded-lg w-full h-[50px]'
                onChange={(e)=>{
                setN(e.target.value);
                }} placeholder='enter you name..'/>
        </div>
        <div className='my-2 bg-yellow-100 shadow-2xl'>
            {ques?.category&&<div className='font-heading text-center'>
                <h1>categories type questions.</h1>
                <p>Drag the values to its correct positions</p>
            </div>}
            {ques?.category.map((ele,index)=>{
                return <div key={index} className='bg-yellow-300 shadow-2xl p-10 rounded-xl'>
                    <h1>{index+1}.</h1>
                    <Cat data={ele} ans={ansCat} setCat={setCat} />
                </div>
            })}
        </div>
        <div className='my-2 bg-yellow-100 shadow-2xl'>
            {ques?.cloze&&<div className='font-heading text-center'>
                <h1>cloze type questions.</h1>
                <p>Drag the values to its correct positions</p>
            </div>}
            {ques?.cloze.map((ele,index)=>{
                return <div key={index} className='bg-yellow-300 shadow-2xl p-10 rounded-xl'>
                    <h1>{index+1}.</h1>
                    <Clo data={ele} ans={ansCloze} setCloze={setCloze}/>
                </div>
            })}
        </div>
        <div className='my-2 bg-yellow-100 shadow-2xl'>
            {ques?.comprehension&&<div className='font-heading text-center'>
                <h1>comprehension type questions.</h1>
                <p>MCQ's</p>
            </div>}
            {ques?.comprehension.map((ele,index)=>{
                return <div key={index} className='bg-yellow-300 shadow-2xl p-10 rounded-xl'>
                    <h1>{index+1}.</h1>
                    <Comp data={ele} ans={ansComp} setComp={setComp}/>
                </div>
            })}
        </div>
        <div className='flex justify-center bg-white p-3'>
        <motion.button whileHover={{scale:1.2}} 
                onClick={(e)=>{
                  e.preventDefault();
                  handleClick();
                }}
                className='sm:ml-[40px] ml-[10px] text-[20px] px-3 
                py-1 bg-black text-white rounded-xl hover:text-black
              hover:bg-violet-600'>{loading?<Puff/>:"Submit"}</motion.button>
        </div>
    </div>
  )
}

export default Fill