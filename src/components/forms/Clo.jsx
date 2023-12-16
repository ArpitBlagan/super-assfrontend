import React,{useEffect,useRef,useState} from 'react'

const Clo = ({data,ans,setCloze}) => {
  const dragEnd=useRef(null);
  const dragStart=useRef(null);
  const [question,setQq]=useState([]);
  useEffect(()=>{
    const val=data.correct;
    const ff=val.split(' ');
    setQq(ff);
    const arr=[];
    data.answers.map((ele,index)=>{
      const obj={
        name:"ans",
        ele:ele
      }
      arr.push(obj);
    })
    setCloze(arr);
  },[]);
  const change=()=>{
    console.log(dragEnd.current,dragStart.current);

    const arr=[...ans];
    arr[dragStart.current.index].name=dragEnd.current.value;
    setCloze(arr); console.log(ans);
  }
  return (
    <div className='p-4 shadow-xl'>
      <div className='flex flex-row-reverse'>
          <button 
            onClick={(e)=>{
              e.preventDefault();
              const arr=[];
              data.answers.map((ele,index)=>{
              const obj={
                name:"ans",
                ele:ele
              }
              arr.push(obj);
            })
            setCloze(arr);
            }}
            className='bg-black hover:bg-violet-600 hover:text-black
           text-white p-3 rounded-xl'>Refresh</button>
      </div>
        <h1 className='text-center font-heading'>Values</h1>
      <div className='flex justify-center bg-gray-200 w-full mb-3'
            onDragEnter={()=>{dragEnd.current={index:-1,value:"ans"}}}
            onDragEnd={()=>{change()}}
            onDragOver={(e)=>{e.preventDefault()}}
      >
        {ans.map((ele,index)=>{
          if(ele.name=="ans"){
          return <div key={index} className='bg-violet-700 m-2 p-3 cursor-pointer'
                draggable
                onDragStart={()=>{dragStart.current={index:index,value:"ans"}}}
                onDragEnter={()=>{dragEnd.current={index:index,value:"ans"}}}
                onDragEnd={()=>{change()}}
                onDragOver={(e)=>{e.preventDefault()}}
          >
            {ele.ele}
          </div>}
        })}
      </div>
      <div className='flex justify-center my-2 items-center' >
        {question.map((ele,index)=>{
          if(ele.startsWith('_') ){
            return <div 
                    key={index}
                    className='py-4 px-8 bg-gray-400'
                    onDragEnter={()=>{dragEnd.current={index:-1,value:index}}}
                    onDragEnd={()=>{change()}}
                    onDragOver={(e)=>{e.preventDefault()}}>
                      {ans.map((el,inde)=>{
                        if(el.name==index){
                          return <div 
                          onDragEnter={()=>{dragEnd.current={index:inde,value:index}}}
                          onDragEnd={()=>{change()}}
                          onDragOver={(e)=>{e.preventDefault()}}
                          key={inde}>{el.ele}</div>
                        }
                      })}
                    </div>
          }else{
            return <div>{ele}</div>
          }
        })}
      </div>
    </div>
  )
}

export default Clo