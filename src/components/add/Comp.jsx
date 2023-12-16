import React,{useRef} from 'react'
import {motion} from 'framer-motion'
const Comp = ({Comprehension,setCc}) => {
  const textareaRef=useRef(null);
  const textquesRef=useRef(null);
    const addCc=()=>{
        const obj={
          passage:"",
          questions:[]
        }
        setCc([...Comprehension,obj]);}
      const removeCc=(index)=>{
        const arr=[...Comprehension];
        arr.splice(index,1);
        setCc(arr);console.log(Comprehension);
      }
      const addQq=(index)=>{
        const arr=[...Comprehension];
        arr[index].questions.push({
          statement:"",
          options:["","","",""],
          correct:"",
        });
        setCc(arr);
      }
      const removeQq=(in1,in2)=>{
        const arr=[...Comprehension];
        arr[in1].questions.splice(in2,1);
        setCc(arr);
      }
      const handleTextareaChange = (index,event) => {
        const arr=[...Comprehension];
        const { value } = event.target;
        arr[index].passage=value;
        setCc(arr);
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto'; 
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
      }; 
      const handlequesChange = (event,index,indexx) => {
        const arr=[...Comprehension];
        const { value } = event.target;
        arr[index].questions[indexx].statement=value;
        setCc(arr);console.log(Comprehension);
        if (textquesRef.current) {
          textquesRef.current.style.height = 'auto'; 
          textquesRef.current.style.height = `${textquesRef.current.scrollHeight}px`;
        }
      };
  return (<div>
    <div className='flex justify-between shadow-xl p-3 mb-3'>
    <h1 className='text-[20px]'>Comprehension Type Question</h1>
    <motion.button 
      onClick={(e)=>{e.preventDefault();addCc()}}
      whileHover={{scale:1.2}} 
      className='px-[10px]
     bg-black text-white rounded-xl hover:text-black
    hover:bg-violet-600'>Add</motion.button>
  </div>
  {Comprehension.map((ele,index)=>{
    return <div key={index} className='my-2 p-3 shadow-lg'>
    <h1 className='text-[20px]'>{index+1}.</h1> 
      <div className=''>
        <div className='mx-2'>
          <textarea ref={textareaRef} 
          onChange={(element)=>{handleTextareaChange(index,element)}} 
          className='w-full pl-3 pt-3' placeholder='Enter Passage..'/>
        </div><div className='flex justify-between'>
        <motion.button 
          onClick={(e)=>{e.preventDefault();removeCc(index)}}
          whileHover={{scale:1.2}} 
          className='px-[5px]
        bg-black text-white rounded-xl hover:text-black
        hover:bg-violet-600'>Remove</motion.button></div>
      </div>
      <div className='flex justify-between my-3'>
        <h1>Questions Related to this Passage</h1>
        <motion.button 
          onClick={(e)=>{e.preventDefault();addQq(index)}}
          whileHover={{scale:1.2}} 
          className='px-[10px] text-[30px]
        bg-black text-white rounded-xl hover:text-black 
      hover:bg-violet-600'>+</motion.button>
      </div>
      <div>
        {ele.questions.map((el,indexx)=>{
          return <div key={indexx}>
              <h1 className='text-[20px]'>{indexx+1}.</h1>
              <div className='mx-2'>
                  <textarea ref={textquesRef} onChange={(e)=>{handlequesChange(e,index,indexx)}} value={Comprehension[index].questions[indexx].statement} placeholder='Enter related question...' className='pl-3 pt-3 w-full'/>
                  <input placeholder='Points..' 
                    onChange={(e)=>{
                      const {value}=e.target;
                      const arr=[...Comprehension];
                      arr[index].questions[indexx].points=value;
                      setCc(arr);console.log(Comprehension);
                    }}
                    value={Comprehension[index].questions[indexx].points} 
                    className='pl-3 pt-3 h-[55px] w-20 mr-3'/>
                <motion.button 
                  onClick={(e)=>{e.preventDefault();removeQq(index,indexx)}}
                  whileHover={{scale:1.2}} 
                  className='px-[5px]
                bg-black text-white text-[25px]  rounded-xl hover:text-black
                hover:bg-violet-600'>-</motion.button>
              </div>
              <h1>Correct Option</h1>
              <textarea 
                  onChange={(e)=>{
                  const {value}=e.target;
                  const arr=[...Comprehension];
                  arr[index].questions[indexx].correct=value;
                  setCc(arr);console.log(Comprehension);
                  }}
                  value={Comprehension[index].questions[indexx].correct} 
                  className='h-[70px] w-full pl-3 pt-3'/>
              
              <h1 className='text-center'>Enter Options(Max 4)</h1>
              {el.options.map((e,indd)=>{
                return <div key={indd} className='my-3 flex flex-col'>
                           {indd+1}. <textarea 
                              onChange={(e)=>{
                                const {value}=e.target;
                                const arr=[...Comprehension];
                                arr[index].questions[indexx].options[indd]=value;
                                setCc(arr);console.log(Comprehension);
                              }}
                              value={Comprehension[index].questions[indexx].options[indd]} 
                              className='h-[70px]'/>
                      </div>
              })}
          </div>
        })}
      </div>
    </div>
  })}</div>
  )
}

export default Comp