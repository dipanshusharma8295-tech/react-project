// import React, { useState } from 'react'

// const App = () => {

//   const [num , setNum] = useState(1)

//   function increaseNum(){
//     setNum(num+1)
//   }
//   function decreaseNum(){
//     setNum(num-1)
//   }

//   function jumpbyfive(){
//     setNum(num+5)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>Increase</button>
//       <button onClick={decreaseNum}>Decrease</button>
//       <button onClick={jumpbyfive}>Jump by 5 </button>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";



const App = () => {

  const  [title , setTitle] = useState('')

  const submiHandler = (e) =>{
    e.preventDefault()
    console.log("form submitted by " , title );

    setTitle('')
    
  }
  return (
    <div>
      <div>
        <form onSubmit={
          (e) => {submiHandler(e)}
          }>
          <input className="p-3 bg-zinc-600 " type="text" value={title} placeholder="Enter your Name" onChange={(e) => {setTitle(e.target.value)
          }} />
          <button className="p-3 bg-amber-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
