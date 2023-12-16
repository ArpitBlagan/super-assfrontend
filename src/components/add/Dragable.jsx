import React,{useEffect, useRef, useState} from 'react'
const Dragable = () => {
  const dragStart=useRef(null);
  const dragEnd=useRef(null);
  const [values,setV]=useState(['A','B','d','D']);
  const [ff,setF]=useState(['A','a'])
  const [cat1,setC1]=useState([]);
  const [cat2,setC2]=useState([]);
  const change=()=>{
    if(dragEnd.current.value!=dragStart.current.value){
      if(dragStart.current.value=="values"&&dragEnd.current.value=="cat1"){
        const first=[...values];
        const second=[...cat1];
        const val=first[dragStart.current.index];
        first.splice(dragStart.current.index,1);
        second.push(val);
        console.log(first,second);
        setV(first);setC1(second);return;
      }
      else if(dragStart.current.value=="cat1"&&dragEnd.current.value=="values"){
        const first=[...cat1];
        const second=[...values];
        const val=first[dragStart.current.index];
        first.splice(dragStart.current.index,1);
        second.push(val);
        setC1(first);setV(second);return;
      }
      else if(dragStart.current.value=="cat2"&&dragEnd.current.value=="values"){
        const first=[...cat2];
        const second=[...values];
        const val=first[dragStart.current.index];
        first.splice(dragStart.current.index,1);
        second.push(val);
        setC2(first);setV(second);return;
      }
      else if(dragStart.current.value=="values"&&dragEnd.current.value=="cat2"){
        const first=[...values];
        const second=[...cat2];
        const val=first[dragStart.current.index];
        first.splice(dragStart.current.index,1);
        second.push(val);
        setV(first);setC2(second);return;
      }
      else if(dragStart.current.value=="cat2"&&dragEnd.current.value=="cat1"){
        const first=[...cat2];
        const second=[...cat1];
        const val=first[dragStart.current.index];
        first.splice(dragStart.current.index,1);
        second.push(val);
        setC2(first);setC1(second);return;
      }
      else if(dragStart.current.value=="cat1"&&dragEnd.current.value=="cat2"){
        const first=[...cat1];
        const second=[...cat2];
        const val=first[dragStart.current.index];
        first.splice(dragStart.current.index,1);
        second.push(val);
        setC1(first);setC2(second);return;
      }
    }
  }
  return (
    <div>
        <div>
          <h1>Values</h1>
          <div className='flex bg-white justify-around'
            onDragEnter={()=>{dragEnd.current={index:-1,value:"values"}}}
                onDragEnd={()=>{change()}}
                onDragOver={(e)=>{e.preventDefault()}}
          >
            {values.map((ele,index)=>{
              return <div
              className='cursor-pointer bg-red p-3'
                key={index}
                draggable
                onDragStart={()=>{dragStart.current={index,value:"values"}}}
                onDragEnter={()=>{dragEnd.current={index,value:"values"}}}
                onDragEnd={()=>{change()}}
                onDragOver={(e)=>{e.preventDefault()}}
                >{ele}</div>
            })}
          </div>
          <div className='grid md:grid-cols-3 gap-3'>
            {ff.map((ele,index)=>{
              if(index==0){
              return <div className='bg-red-300 p-10'
                    onDragEnter={()=>{dragEnd.current={index:-1,value:"cat1"}}}
                        onDragEnd={()=>{change()}}
                        onDragOver={(e)=>{e.preventDefault()}}
              >
                  <h1>{ele}</h1>
                  {cat1.map((e,ind)=>{
                    return <div className='cursor-pointer bg-white p-1 my-1'
                        key={ind}
                        draggable
                        onDragStart={()=>{dragStart.current={index:ind,value:"cat1"}}}
                        onDragEnter={()=>{dragEnd.current={index:ind,value:"cat1"}}}
                        onDragEnd={()=>{change()}}
                        onDragOver={(e)=>{e.preventDefault()}}
                      >{e}</div>
                  })}

              </div>}
              else if(index==1){
                return <div className='bg-red-300 p-10'
                    onDragEnter={()=>{dragEnd.current={index:-1,value:"cat2"}}}
                        onDragEnd={()=>{change()}}
                        onDragOver={(e)=>{e.preventDefault()}}
                ><h1>{ele}</h1>
                {cat2.map((e,ind)=>{
                    return <div
                      className='cursor-pointer bg-white p-1 my-1'
                        key={ind}
                        draggable
                        onDragStart={()=>{dragStart.current={index:ind,value:"cat2"}}}
                        onDragEnter={()=>{dragEnd.current={index:ind,value:"cat2"}}}
                        onDragEnd={()=>{change()}}
                        onDragOver={(e)=>{e.preventDefault()}}
                      >{e}</div>
                  })}</div>
              }
            })}
          </div>
        </div>
    </div>
  )
}

export default Dragable