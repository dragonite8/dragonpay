import React from 'react'

const Overview = () => {
  return (
    <div>
      <div className='flex flex-row justify-between mx-5'>
        <div className='p-16 bg-white rounded-md text-gray-500'>
          <p className='text-center text-black text-3xl mb-2'>0</p>
          <p>Total Outstanding Balance (USD)</p>
        </div>
        <div className='p-16 bg-white rounded-md text-gray-500'>
          <p className='text-center text-black text-3xl mb-2'>4</p>
          <p>Total Unpaid POs</p>
        </div>
        <div className='p-16 bg-white rounded-md text-gray-500'>
          <p className='text-center text-black text-3xl mb-2'>20,000</p>
          <p>Total Paid (USD/Month)</p>
        </div>
      </div>
    </div>
  )
}

export default Overview