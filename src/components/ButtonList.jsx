import React from 'react'
import Button from '@mui/material/Button';

function ButtonList({ handleClick }) {
  const buttonLayout = ["-", "RESET", "+"];

  const buttons = buttonLayout.map(type => {
    return <Button onClick={() => {handleClick(type)}} key={type} variant="contained" sx={{ m: .5 }}>{type}</Button>
  })

  return (
    <>
      {buttons}
    </>
  )
}

export default ButtonList