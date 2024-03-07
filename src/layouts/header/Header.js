import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li><a href= '/clients' >HOME</a> </li>
            <li><a href= '/commands' >Commands</a></li>
            <li><a href= '/clients' >Clients</a></li>
            <li><a href= '#' >Print</a></li>

        </ul>

    </div>
  )
}

export default Header