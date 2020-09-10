import React,{useState} from 'react'


const TeacherConfference = () => {

    const [value,setValue]=useState([])
    const [save,setSave]=useState([])
    
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    
    
    const onSave=()=>{
        setSave(value)
    }
  return (
    <div>
     <input type='text' onChange={handleChange}></input>
     <button onClick={()=>onSave()} >submit</button>
     {save?<p>{save}</p>:"please add someting"}
    </div>
  )
}
export  default TeacherConfference;