import React from 'react'
import logoblue from '../public/logoblue.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed w-full my-0 mx-auto z-10'>
      <div className='flex max-h-4 p-10 justify-between items-center'>
        <Image src={logoblue} alt='' className='self-center h-12 w-32'/>
        <ul className='flex-end'>
          <li className=''>Account</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar