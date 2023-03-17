import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import"../App.css"

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='Navbar'>
        <ul>
            <Button onClick={()=> {localStorage.clear();navigate('/')}}>Logout</Button>
        </ul>
    </div>
  )
}

export default Navbar