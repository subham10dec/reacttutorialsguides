import React,{useState} from 'react'

function ConditionalRendering() {
    const [islogin,setIslogin]=useState(null);
  return (
   
      <>
         {/* //using ternary operatory */}
    <div>
        {islogin?'Welcome Valid Users':'Welcome Guest'}
    </div>
    {/* using short-curcuit operator */}
    <div>
       {!islogin && <div>Welcome Guest</div>}
    </div>
    </>
  )
}

export default ConditionalRendering