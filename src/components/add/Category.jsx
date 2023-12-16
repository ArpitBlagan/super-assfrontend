import React from 'react'
import {motion} from 'framer-motion';
const Category = ({Categories,setCa}) => {
    const addCa=()=>{
        const obj={
            categories:[],
            values:[]
        }
        setCa([...Categories,obj]);
    }
    const removeCa=(index)=>{
        const arr=[...Categories];
        arr.splice(index,1);
        setCa(arr);
    }
    const addCat=(index)=>{
        const arr=[...Categories];
        if(arr.length<3){
        arr[index].categories.push("");
        setCa(arr);}
        else{alert('MaX 3 categroies can be added');}
    }
    const removeCat=(index,ind)=>{
        const arr=[...Categories]
        arr[index].categories.splice(ind);
        setCa(arr);
    }
    const addVal=(index)=>{
        const arr=[...Categories];
        arr[index].values.push({key:"",val:""});
        setCa(arr);
    }
    const removeVal=(index,inddd)=>{
        const arr=[...Categories];
        arr[index].values.splice(inddd,1);
        setCa(arr);
    }
  return (
    <div className='shadow-xl p-3 mb-3 mt-6'>
        <div className='flex justify-between'>
            <h1 className='text-[20px]'>Category Type Question (MAX 3)</h1>
            <motion.button 
                onClick={(e)=>{e.preventDefault();addCa()}}
                whileHover={{scale:1.2}} 
                className='px-[10px]
                bg-black text-white rounded-xl hover:text-black
                hover:bg-violet-600'>Add
            </motion.button>
        </div>
        <div className='my-3'>
            {Categories.map((ele,index)=>{
                return <div key={index} className='my-2 p-3 shadow-lg'>
                    <div className='flex justify-between'>
                        <h1>Question {index+1}.</h1>
                        <motion.button 
                            onClick={(e)=>{e.preventDefault();removeCa(index)}}
                            whileHover={{scale:1.2}} 
                            className='px-[5px]
                            bg-black text-white rounded-xl hover:text-black
                             hover:bg-violet-600'>Remove</motion.button>
                    </div>
                    <div>
                        <div className='flex justify-between my-4'>
                            <h1>Categories</h1>
                            <motion.button 
                                onClick={(e)=>{e.preventDefault();addCat(index)}}
                                whileHover={{scale:1.2}} 
                                className='px-[10px] text-[20px]
                                bg-black text-white rounded-xl hover:text-black 
                                hover:bg-violet-600'>+</motion.button>
                        </div>
                        {ele.categories.map((e,ind)=>{
                            return <div key={ind} className='flex justify-around my-4'>
                                <h1>{ind+1}.</h1>
                                <input  value={e}
                                    onChange={(event)=>{
                                        const {value}=event.target;
                                        const arr=[...Categories];
                                        arr[index].categories[ind]=value;
                                        setCa(arr);
                                    }} 
                                    className='h-[60px] pl-3 rounded-md'
                                    placeholder='Enter Category...'/>
                                <motion.button 
                                    onClick={(e)=>{e.preventDefault();
                                    removeCat(index,ind)}}
                                    whileHover={{scale:1.2}} 
                                    className='px-[5px]
                                    bg-black text-white text-[25px]  rounded-xl hover:text-black
                                    hover:bg-violet-600'>-</motion.button>
                            </div>
                        })}
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h1>Values</h1>
                            <motion.button 
                                onClick={(e)=>{e.preventDefault();addVal(index)}}
                                whileHover={{scale:1.2}} 
                                className='px-[10px] text-[20px]
                                bg-black text-white rounded-xl hover:text-black 
                                hover:bg-violet-600'>+</motion.button>
                        </div>  
                        <div className='flex justify-around'>
                            <h1>Index</h1>
                            <h1>Value</h1>
                            <h1>Belongs To</h1>
                            <h1>Remove</h1>
                        </div>
                        {ele.values.map((ee,inddd)=>{
                            return <div key={inddd} className='flex justify-around gap-3 my-3'>
                                <h1>{inddd+1}.</h1>
                                <input
                                    value={ee.key} 
                                    onChange={(event)=>{
                                        event.preventDefault();
                                        const {value}=event.target;
                                        const arr=[...Categories];
                                        arr[index].values[inddd].key=value;
                                        setCa(arr);console.log(Categories);
                                    }}
                                    className='pl-3 pt-3 h-[60px] rounded-md' 
                                    placeholder='Enter value...'/>
                                <select
                                    onChange={(event)=>{
                                        const {value}=event.target;
                                        const arr=[...Categories];
                                        arr[index].values[inddd].val=value;
                                        setCa(arr);
                                    }} 
                                    value={ee.val}
                                    className='w-[200px] h-[60px] rounded-md'>
                                    <option defaultChecked value="">Choose Category</option>
                                    {ele.categories.map((ell,inf)=>{
                                        return <option key={inf} value={ell}>
                                            {ell}
                                        </option>
                                    })}
                                </select>
                                <motion.button 
                                onClick={(e)=>{e.preventDefault();
                                removeVal(index,inddd)}}
                                whileHover={{scale:1.2}} 
                                className='px-[10px] text-[20px]
                                bg-black text-white rounded-xl hover:text-black 
                                hover:bg-violet-600'>-</motion.button>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Category