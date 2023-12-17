import React, { useEffect,useRef,useState } from 'react'

const Cat = ({data,ans,indd,setCat}) => {
  const dragEnd=useRef(null);
  const dragStart=useRef(null);
  const change=()=>{
    const arr=[...ans];
    arr[indd][dragStart.current.index].name=dragEnd.current.value;
    setCat(arr);console.log(ans);
  }
  useEffect(()=>{
    setCat([...ans,[]]);
    const arr=[...ans];
    const val=[]
    data.values.map((ele,index)=>{
      const obj={
        name:"values",
        ele:ele.key
      }
      val.push(obj);
    });console.log("val",val);
    arr[indd]=val;
    setCat(arr);console.log("ans",arr);
  },[]);
  return (
    <div className='p-4 shadow-xl'>
      <h1 className='text-center font-heading'>Values</h1>
      <div className='flex justify-center bg-gray-200 w-full mb-3'
            onDragEnter={()=>{dragEnd.current={index:-1,value:"values"}}}
            onDragEnd={()=>{change()}}
            onDragOver={(e)=>{e.preventDefault()}}
      >
        {ans.length>indd&&ans[indd].map((ele,index)=>{
          if(ele.name=="values"){
          return <div key={index} className='bg-violet-700 m-2 p-3 cursor-pointer'
                draggable
                onDragStart={()=>{dragStart.current={index,value:"values"}}}
                onDragEnter={()=>{dragEnd.current={index,value:"values"}}}
                onDragEnd={()=>{change()}}
                onDragOver={(e)=>{e.preventDefault()}}
          >
            {ele.ele}
          </div>}
        })}
      </div>
      <div className='flex justify-around gap-2'>
        {data.categories.map((ele,index)=>{
           return <div className='px-10 pb-10 bg-gray-200' key={index}
                  onDragEnter={()=>{dragEnd.current={index:-1,value:ele}}}
                  onDragEnd={()=>{change()}}
                  onDragOver={(e)=>{e.preventDefault()}}
           >
                <h1>{ele}</h1>
                {ans.length>indd&&ans[indd].map((e,ind)=>{
                  if(e.name==ele){
                  return <h1 className='font-heading top-0 p-2 bg-violet-400' key={ind}
                    draggable
                    onDragStart={()=>{dragStart.current={index:ind,value:ele}}}
                    onDragEnter={()=>{dragEnd.current={index:ind,value:ele}}}
                    onDragEnd={()=>{change()}}
                    onDragOver={(e)=>{e.preventDefault()}}
                  >{e.ele}</h1>}
                })} 
           </div>
        })}
      </div>
    </div>
  )
}

export default Cat