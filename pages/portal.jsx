import React from 'react'
import Navbar from '@/components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import Table from '@/components/table';
import Overview from '@/components/Overview';


const portal = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
  
      <div className='flex flex-col self-center max-w-[1400px] mt-44 p-8 h-full w-full bg-gray-100'>
        <div className='my-10'>
          <Overview />
        </div>

        {/** Search bar */}
        <div className='flex w-auto p-2 m-2 justify-center' >
          <div className="xl:w-[60%] ">
            <div className="relative flex w-full flex-wrap items-stretch ">
              <input
                type="search"
                className="relative m-0 -mr-px bg-white block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search transactions..."
              />
              <button
                className="relative z-[2] flex items-center rounded-r bg-blue-900 opacity-80 px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                type="button"
                >
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className='py-2 px-4 rounded-md bg-white ml-4 text-gray-600 border border-solid border-neutral-300'>Sort</div>
          <div className='py-2 px-4 rounded-md bg-white ml-4 text-gray-600 border border-solid border-neutral-300'>Filter</div>
        </div>


        {/* Table */}
        <div>
          <Table />
        </div>

      </div>
    </div>
  )
}

export default portal