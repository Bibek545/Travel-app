import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center bg-red-200 px-6 py-3'>
                <div className='text-md font-bold text-left p-4'>Come With Me</div>
                <div className='flex gap-20'>
                    <Link to="/">Home</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to= "/inspiration">Inspiration</Link>
                </div>
                <div className='flex gap-3 items-center'>
                    <button className='text-2xl'><CiSearch /></button>
                    <button className='w-[100px] bg-zinc-200 p-2 rounded-lg shadow-md '>Sign In</button>
                    <button className='w-[120px] bg-zinc-200 p-2 rounded-lg shaodw-md '>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
