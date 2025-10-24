// import React, { useState } from 'react'

// import axios from 'axios'

// const App = () => {

//  const[data, setData] = useState([])

//   const getData = async () =>{

//     const response = await axios.get('https://picsum.photos/v2/list')

//     setData(response.data)

//   }


 
  
//   return (
//     <div>
//       <button onClick={getData}>
//         get data
//       </button>

//       <div>
//       {
//         data.map(function(elem,idx){
//           return <h3>hello , {elem.author} , {idx} </h3>
//         }) 
//       }
//       </div>
//     </div>
//   )
// }



// export default App


import React, { useEffect, useState } from 'react'

const App = () => {

  const [num , setNum] = useState(0)
  const [num2 , setNum2] = useState(0)

  useEffect(function(){
    console.log(" useffect is running");
    
  })
  return (
    <div>
      <h1>{num}</h1>
     
      <button onClick={()=>{
        setNum(num+1)
        
      }}>click</button>
    </div>
  )
}





export default App

