import { useState } from "react";
import Link from 'next/link'

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [offCanvas, setOffCanvas] = useState(false);
    const [search, setSearch] = useState(false);
    const dropDownList = [
      { text: 'Cloud Computing', href: '/post'},
      { text: 'AI', href: '/post'},
      { text: 'Big Data', href: '/post'},
    ]
    return (
        <nav className='py-5'>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row relative w-full">
            <div className="flex items-center justify-between px-6 lg:w-2/12">
            <button type="" className="lg:hidden" onClick={() => {setOffCanvas(!offCanvas)}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
              <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </svg>
            </button>
            <div className='text-xl'>
              <Link href="/">
                <a href="/" className="flex items-center ">
                <div className='rounded bg-gray-500 w-10 h-10 flex justify-center items-center mr-3'>
                  NA
                </div>
                Next App
                </a>
              </Link>
            </div>
            <button className="flex lg:hidden" onClick={() => {setSearch(!search)}}>
              <svg className={`${!search ? 'block':'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${search ? 'feather feather-x':'hidden'}`}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            </div>
            <div className={`lg:w-7/12 fixed lg:static min-h-screen min-w-full lg:min-w-max lg:min-h-max items-center lg:flex pt-8 lg:pt-0 z-10 -top-3 ${offCanvas ? 'left-0' : '-left-[120%]'} bg-gray-700 lg:bg-transparent px-6 lg:px-0 transition-all`}>
              <button  onClick={() => {setOffCanvas(false)}} className="absolute lg:hidden right-5 top-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <ul className='lg:space-x-6 space-y-4 lg:space-y-0 mt-8 lg:mt-0 flex flex-col lg:flex-row items-start lg:items-center'>
                <li>
                    <Link href="./post">
                    <a href="./post" className='hover:no-underline focus:bg-transparent cursor-pointer hover:text-gray-500 transition-all'>UI Design</a>
                    </Link>
                </li>
                <li>
                  <Link href="./post">
                  <a href="./post" className='hover:no-underline focus:bg-transparent cursor-pointer hover:text-gray-500 transition-all'>Front End</a>
                  </Link>
                </li>
                <li>
                  <Link href="./post">
                  <a href="./post" className='hover:no-underline focus:bg-transparent cursor-pointer hover:text-gray-500 transition-all'>Back End</a>
                  </Link>
                </li>
                <li className='relative'>
                  <a href="#" className='hover:no-underline focus:bg-transparent cursor-pointer flex items-center' onClick={() => setDropdown(!dropdown)}>Lainnya 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  </a>
                  {dropdown &&(
                  <ul className='absolute w-[200px] top-10 rounded-lg bg-gray-600'>
                    {dropDownList.map(({text, href}) => (
                    <li key={text} className="first:rounded-t-lg last:rounded-b-lg border-b border-white/5 last:border-0 focus:bg-transparent cursor-pointer hover:bg-gray-400/60">
                      <Link href={href}>
                        <a href={href} className='hover:no-underline flex py-3 px-6 hover:text-gray-500 transition-all'>{text}</a>
                      </Link>
                    </li>
                    ))}
                  </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className={`w-[90%] lg:w-3/12 bg-gray-700 absolute lg:static lg:bg-none ${search ? '-top-3':'-top-24'} transition-all rounded-full lg:flex`}>
              <input className='rounded-full px-5 py-5 lg:py-2 bg-gray-500 outline-none border-none w-full text-white bg-search pl-14' type="text" placeholder='Search...'/>
            </div>
          </div>
        </div>
      </nav>
    );
}