import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SampleForm = () => {
    var[input,setInput] = useState();
    var[input2,setinput2] = useState()
    const rithin=(e)=>{
setInput(e.target.value)
console.log(input)
    }

    const rithin2 = (e)=>{
        setinput2(e.target.value)
    }
  return (
    <div>
        <Typography>{input}</Typography>
      <TextField varient='outlined' label='First Name '
      onChange={rithin}/>
       <br></br>
       <Typography>{input2}</Typography>
       <TextField varient='outlined' label='password '
      onChange={rithin2}/>
      <br></br>
      <Button variant='contained'>sign</Button>
    </div>
  )
}

export default SampleForm
