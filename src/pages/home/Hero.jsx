import React from 'react'

const Hero = () => {
    return (
        <>
            <section className='grid grid-cols-2 gap-4 p-5'>
                {/* LEFT HERO SECTION */}
                <div className='flex flex-col bg-mauve-200 min-h-[500px] p-5'>
                    <div className='bg-zinc-200 rounded-lg shadow-md p-3 text-left w-fit'>PLANE-ICON PLAN EXPLORE EXPERIENCE</div>
                    <div className=' bg-400 p-5'>
                        <h3 className='text-4xl font-bold'>Your next<br/> adventure <br />starts here.</h3>
                        <p>Discover incredible places, plan unforgettable trips, and make memories for a lifetime.</p>
                    </div>
                    <div className=' p-5'>
                        <form className='flex w-full max-w-[500px] gap-4'>
                            <input className='bg-zinc-200 flex flex-1 rounded-lg shadow-lg p-5 ' type='text' name='searchbar' id='searchbar' placeholder='Where do you want to go?'></input>
                            <button className='w-[100px] bg-zinc-200 p-2 rounded-lg shadow-md'>Search</button>
                        </form>
                    </div>
                </div>


                {/* RIGHT HERO SECTION */}
                <div className='relative'> 
                    <img src='Barrier-reef.jpg' alt='great-barrier-reef' className='w-full h-full object-cover rounded-xl'/>
                    <div className='absolute bottom-5 left-5 text-slate-200 font-bold'>
                        <p>Great Barrier Reef</p>
                        <p>Queensland, Australia</p>
                    </div>
                </div>
                
 

            </section>
        </>
    )
}

export default Hero
