import React from 'react'
// import { appleImg } from '../utils/index.js'
import { navLists } from '../constants/index.js'
const NavBar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src="/assets/images/apple.svg" alt="Apple" width={18} height={18}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((i) => (
                    <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                        {i}
                    </div>
                ))}
            </div>
            <div className='flex items-baseline gap-7 max-sm: justify-end max-sm: flex-1'>
                <img src="/assets/images/search.svg" alt="" />
                <img src="/assets/images/bag.svg" alt="" />
            </div>
        </nav>
    </header>
  )
}

export default NavBar