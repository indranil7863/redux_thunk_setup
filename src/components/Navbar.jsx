import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    
  return (
    <div className='flex justify-between w-full items-center py-2 border-b-2 sticky top-0'>
        <div className=' flex justify-center gap-4'>
        <h2 className='px-2'>RTK</h2>
        <div className='flex gap-4'>
           <Link className='hover:text-red-600'>Create Post</Link>
           <Link className='hover:text-red-600'>All Posts</Link>
         </div>
         </div>
         <div className='w-[50%] pr-2 '>
            <input className='w-full py-2 px-2 outline-none bg-gray-300 rounded-[5px] ' type="text" name="search" placeholder='Search' />
         </div>
    </div>
  )
}
