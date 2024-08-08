import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center p-10 text-3xl font-sans font-semibold'>User : {userid}</div>
  )
}

export default User