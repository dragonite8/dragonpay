import React from 'react'
import logoblue from '../public/logoblue.png'
import Image from 'next/image'
import Link from 'next/link'

const vendorAuth = () => {
  return (
    <div className='flex flex-col h-screen p-10 pb-40 mb-20 justify-center items-center'>
      <div className='pb-20'>
        <Image src={logoblue} alt=''/>
      </div>
      <div className='p-10 pr-20 border border-gray-400 rounded-md shadow-lg ease-in-out'>
        <h2 className='text-2xl self-center p-10 ml-6 text-gray-600'>New Vendor Registration</h2>
        <form className='max-w-md'>
          <div className='flex flex-col items-center justify-center'>

            <div className='flex flex-row my-2 items-center'>
              <div className='w-1/3'>
                <label className='self-center text-gray-500 font-bold mb-1 pr-4'>Key</label>
              </div>
              <div className='w-2/3'>
                <input className='self-end bg-gray-200 appearance-none border-2 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white' type="text" placeholder='Enter key'/>
              </div>
            </div>

            <div className='flex flex-row my-2 items-center'>
              <div className='w-1/3'>
                <label className='self-center text-gray-500 font-bold mb-1 pr-4'>Email</label>
              </div>
              <div className='w-2/3'>
                <input className='bg-gray-200 appearance-none border-2 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white' type="text" placeholder='Enter email'/>
              </div>
            </div>

            <div className='px-4 py-2 border border-gray-400 rounded my-8 self-center hover:scale-105 duration-300 ease-in-out text-gray-600 cursor-pointer'>
              <button>
                <a href="https://embed-dev.vopay.com/b121ee47099fcff278a1ba0339df633931ab68fe">
                  Continue
                </a>
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default vendorAuth