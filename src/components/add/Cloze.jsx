import React,{useRef} from 'react'
import ReactQuill from 'react-quill';
import {motion} from 'framer-motion';
import 'react-quill/dist/quill.snow.css';
const Cloze = ({Clozee,setCl}) => {
  const dragStart=useRef(null);
  const dragEnd=useRef(null);
  const addCl=()=>{
    const obj={
      question:"",
      correct:"",
      answers:[],
      points:""
    }
    setCl([...Clozee,obj]);
  }
  const change=(index)=>{
    const arr=[...Clozee[index].answers];
    const in1=dragStart.current,in2=dragEnd.current;
    const val=arr[in1];
      console.log(in1,in2);
      arr.splice(in1,1);
      if(in1<in2){
        const arrr=[...arr.slice(0,in2),val,...arr.slice(in2)];
        const vall=[...Clozee];
        vall[index].answers=arrr;setCl(vall);
        updateUnderlinedItems(index);
      }
      else if(in1>in2){
        const arrr=[...arr.slice(0,in2),val,...arr.slice(in2)];
        const vall=[...Clozee];
        vall[index].answers=arrr;setCl(vall);
        updateUnderlinedItems(index);
      }

  }
  const handelChange=(content,index)=>{
    const arr=[...Clozee];
    arr[index].question=content;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const underlinedElements = tempDiv.querySelectorAll('u');
    const underlinedWords = Array.from(underlinedElements).map((el) =>{
      return el.textContent;
    })
    console.log(underlinedWords);
    arr[index].answers=underlinedWords;
    setCl(arr);
  }
  const removeCl=(index)=>{
    const arr=[...Clozee];
    arr.splice(index,1);
    setCl(arr);
  }
  const modules = {
    toolbar: [
      ['underline',]
    ],
  };
  const updateUnderlinedItems = (index) => {
    const quillEditor = document.querySelector('.ql-editor'); // Get the editor's content container
    const underlinedItems = quillEditor.querySelectorAll('u');

    underlinedItems.forEach((item,ind) => {
      // Access and modify content inside <u> tags
      const replacementText = Clozee[index].answers[ind]; // Replace with your desired text
      item.innerHTML = replacementText; // Change content inside <u> tags
    });

    const updatedContent = quillEditor.innerHTML; // Get updated HTML content
    const arr=[...Clozee];
    arr[index].question=updatedContent;
    setCl(arr); // Update state with the modified content
  };
  return (
    <div className='shadow-xl p-3 mb-3 mt-6'>
        <div className='flex justify-between'>
            <h1 className='text-[20px]'>Cloze Type Questions</h1>
            <motion.button 
                onClick={(e)=>{e.preventDefault(); addCl()}}
                whileHover={{scale:1.2}} 
                className='px-[10px]
                bg-black text-white rounded-xl hover:text-black
                hover:bg-violet-600'>Add
            </motion.button>
        </div>
        <div>
          {Clozee.map((ele,index)=>{
            return <div className='my-2 p-3 shadow-lg' key={index}>
                <div className="p-5 ">
                <h1>{index+1}. Question: </h1>
                <textarea value={ele.correct} 
                className='h-[50px] w-full pl-3 pt-3'
                onChange={(e)=>{
                  const arr=[...Clozee];
                  arr[index].correct=e.target.value
                  setCl(arr);
                }}/>
                <h1>Enter correct statement and underline the blank wordss</h1>
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  className='bg-white pl-3 pt-3'
                  spellCheck={false}
                  value={ele.question}
                  onChange={(content)=>{handelChange(content,index)}}
                />
                  <motion.button 
                    onClick={(e)=>{e.preventDefault(); removeCl(index)}}
                    whileHover={{scale:1.2}} 
                    className='px-[6px]
                  bg-black text-white rounded-xl hover:text-black
                  hover:bg-violet-600'>remove
                  </motion.button>
                </div>
                <div className='bg-white'>
                    <div className='text-center'>
                      <p>You can change the ans order by dragging them...</p>
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        {ele.answers.map((el,inde)=>{
                        return <div draggable key={inde} 
                            onDragStart={()=>{dragStart.current=inde}}
                            onDragEnter={()=>{dragEnd.current=inde}}
                            onDragEnd={()=>{change(index)}}
                            onDragOver={(e)=>{e.preventDefault()}}
                            className='my-5 bg-red-400 p-4 cursor-pointer'>{inde+1}. {el}
                        </div>
          })}
        </div>
                </div>
                </div>
                })}
        </div>
    </div>
  )
}

export default Cloze