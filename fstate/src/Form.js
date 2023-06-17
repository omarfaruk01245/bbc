import { useState } from "react";

function  Form(){
const [name, setName] = useState("");

return (

    <>
 {name}
 {name}
 {name}
 {name}
 {name}
 {name}
 {name}
   
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" border w-[25%] h-[25%]"
        />
    
   
    </>
  )
}


 


export default Form;