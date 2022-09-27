import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogOut() {
    const navigation= useNavigate()
    useEffect(() => {
        if(localStorage.getItem('id')){

            localStorage.removeItem('id')
            navigation('/');
          }
    }, [])
    
  return (
      <>
      </>
    
  )
}
