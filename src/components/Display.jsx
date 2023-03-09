import React from 'react'
import TextField from '@mui/material/TextField';

function Display({ count }) {
  return (
    <TextField fullWidth hiddenLabel id="filled-basic" variant="filled" sx={{ my: 2 }} value={count}/>
  )
}

export default Display