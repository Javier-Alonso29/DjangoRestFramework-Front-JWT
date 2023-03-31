import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export const Header = () => {
    const {name} = useContext(AuthContext)
  return (
    <div>
        <Link to='/'>Home</Link> |
        <Link to='/login'>Login</Link>

        <p>Hello {name}</p>
    </div>
  )
}
