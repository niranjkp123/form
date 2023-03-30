import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SingleForm = () => {
    var[input,setInput]=useState({
        value1:'',value2:'',
        value3:''
    })
    const inputHandler =(e)=>{
        const {name,value}= e.target 
        setInput({...input,[name]:value})
    }
  return (
    <div>
        <Typography>{input.value1}</Typography>
     <TextField label='FirstName' name='value1' value={input.value1}
      onChange={inputHandler} />
      <br></br>
      <Typography>{input.value2}</Typography>
      <TextField label='middle' name='value2' value={input.value2}
      onChange={inputHandler}/>
      <Typography>{input.value3}</Typography>
      <TextField label='last' name='value3' value={input.value3}
      onChange={inputHandler}/>
      <br></br>
      <Button variant='contained'>sign</Button>
    </div>
  )
}

export default SingleForm
