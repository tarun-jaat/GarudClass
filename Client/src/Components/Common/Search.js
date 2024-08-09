import React from 'react'

function Search() {
  return (
    <div className='w-full my-4'>
        <input className='md:px-4 md:py-3 py-2 px-2 focus:bg-white hover:bg-white border-2 border-[#0342ff] rounded-3xl md:w-4/5  bg-[#ffffff] ' type="text" placeholder="Search...">
        </input>
        <button className='bg-[#1f83e1] text-white px-4 md:py-3 rounded-2xl p-2 ml-2  md:ml-3 '>
            Search
        </button>
    </div>
  )
}

export default Search