import React, { useState } from "react";
import { X } from 'lucide-react';


const App = () => {


  const [title , setTitle] = useState('');

  const [detail , setDetail] = useState('');

  const[task, setTask] = useState([])

 


     const deleteNote = (idx) => {
      const copyTask = [...task];
      copyTask.splice(idx,1)
      setTask(copyTask)
      
    }


  const submitHandler = (e) => {
    
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title,detail})

    setTask(copyTask)
    setTitle('')
    setDetail('')

 

    
  };

  
  return (
    <div className="h-screen lg:flex bg-black text-white">

      

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex   lg:w-1/2  flex-col items-start  gap-4 p-10 "
      >

        <h1 className="text-xl font-bold"> Add Notes</h1>
        
          <input
            className="px-5 py-2 w-full font-medium  h-20 border-2 outline-none rounded "
            type="text"
            value={title}
            placeholder="Enter Notes Heading"
            onChange={(e)=>{
            setTitle(e.target.value);
             
              
            }}
            
          />



          <textarea
            name=""
            className="px-5 w-full py-2 font-medium h-32 border-2 outline-none rounded "
            placeholder="Enter Details"
            id=""
            value={detail}
            onChange={(e)=>{
              setDetail(e.target.value)
            }}
          ></textarea>



          <button className="bg-white active:bg-gray-400 w-full text-black px-5 outline-none py-2 rounded">
            Add Note
          </button>
        
      </form>


      <div className=" lg:1/2 lg:border-l-2  flex-wrap  p-10">

      <h1 className="text-xl font-bold">Recent Notes</h1>

          <div className="flex gap-5 flex-wrap items-start justify-start  mt-2 h-full ">
            
          {
            task.map(function(elem,idx){
              return <div key={idx} className="h-52 w-40 relative justify-between flex-col  items-start rounded-2xl text-black p-4 bg-white">
                
                <h3 className="leading-tight w-auto text-xl font-bold">{elem.title}</h3>
                <p className="mt-2 leading-tight font-medium w-auto text-gray-500">{elem.detail}</p>
                <button 
                onClick={() =>{
                  deleteNote(idx)
                }}
                 className="w-full mt-20 cursor-pointer active:scale-95 bg-green-900 py-1 text-xs rounde-xs font-bold text-white"
                  > Delete 
                  </button>
                
              </div>
          
            })
          }
         
          </div>
      </div>


    </div>
  );
};

export default App;
