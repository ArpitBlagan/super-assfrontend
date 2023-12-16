import React,{useEffect} from 'react'

const Comp = ({data,ans,setComp}) => {
  useEffect(()=>{
    const arr=[];
    data.questions.map((ele,index)=>{
      arr.push("");
    });
  })
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
            <div>
              {ele.options.map((ee,ind)=>{
                return <div key={ind}>
                        <input
                        type="radio"
                        id={`option-${ind}`}
                        name="mcqOptions"
                        value={ee}
                        checked={ans[index] == ee}
                        onChange={(e)=>{
                          const {value}=e.target;
                          const arr=[...ans];
                          arr[index]=value;setComp(arr);console.log(ans);
                        }}
                      />
                    <label htmlFor={`option-${ind}`}>{ee}</label>
                  </div>
              })}
            </div>
          </div>
        })}
    </div>
  )
}

export default Comp