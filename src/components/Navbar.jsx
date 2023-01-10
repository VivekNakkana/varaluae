import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center font-head mt-8 mx-20 ' >
      <img className='w-35  h-12' src={require('../Assets/Logo.png')} alt='img' />
      <GiHamburgerMenu className='lg:hidden text-4xl' />
      <ul className='hidden lg:flex items-center gap-6 text-xl text-slate-500 ' >
        <li className='text-black' >Home</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>About Us</li>
        <button className='bg-varal-blue/80 text-white px-4 py-4 text-xl rounded-md' >Start a Company</button>
      </ul>
    </div>
  )
}

export default Navbar