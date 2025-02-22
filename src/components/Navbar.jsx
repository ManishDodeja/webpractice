import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' >About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' >Contact US</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}
