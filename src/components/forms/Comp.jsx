import React,{useEffect} from 'react'

const Comp = ({data,ans,indd,setComp}) => {
  useEffect(()=>{
    setComp([...ans,[]]);
    const arr=[...ans];
    const val=[]
    data.questions.map((ele,index)=>{
      val.push("");
    });
    arr[indd]=val;setComp(arr);
  },[])
  return (
    <div className='p-4 shadow-xl'>
        <h1>Passage.</h1>
        <p className='w-full p-3 bg-white'>
            {data.passage}
        </p>
        {data.questions.map((ele,index)=>{
          return <div key={index} className='bg-white my-3 p-2'>
            <div className='flex gap-2 p-1'>
            <h1>{index+1}</h1>
            <p>{ele.statement}</p></div>
            <div className='flex justify-between'>
              <div className='ml-2'>
              {ele.options.map((ee,ind)=>{
                return <div key={ind}
                    onClick={(e)=>{
                      e.preventDefault();
                      console.log('clicked');
                      const arr=[...ans];
                      arr[indd][index]=ee;setComp(arr);
                    }} 
                    className='p-3  m-2 cursor-pointer'
                      style={{backgroundColor:ans.length>indd&&ans[indd][index]==ee?'rgb(239 68 68 / var(--tw-bg-opacity))':'rgb(139 92 246 / var(--tw-bg-opacity))'}}
                    >
                    <label>{ee}</label>
                  </div>
              })}</div>
              <div>answer: {ans.length>indd?ans[indd][index]:""}</div>
            </div>
          </div>
        })}
    </div>
  )
}

export default Comp