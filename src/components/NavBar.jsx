import React from 'react'
import { navLinks } from '../constants'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt='Apple logo'/>

            <ul>
                {navLinks.map((link) =>(
                    <li key={link.label}>
                         <a href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='flex-center gap-3'>
                <button>
                    <img src={search} alt='search'/>
                </button>
                <button>
                    <img src={cart} alt='cart'/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
