import React from 'react'
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Display from './Display'
import ButtonList from './ButtonList'

function Calculator() {
  const [count, setCount] = useState(0);

  const resetCount = () => {setCount(0)}
  const updateCount = type => {setCount(count+Number(type+"1"))}

  const handleClick = (type) => {
    type === "RESET" ? resetCount() : updateCount(type) 
  }

  return (
    <Card>
        <CardContent>
            <Display count={count}/><br/>
            <ButtonList handleClick={handleClick}/>
        </CardContent>
    </Card>
  )
}

export default Calculator;