import React, { useState } from 'react'

const Hero = () => {
const destinations = [
        {
        id:1,
        name: "Mustang",
        country: "Nepal",
        image: "/mustang.jpg"
    },
      {
        id:2,
        name: "Sydney",
        country: "Australia",
        image: "/sydney.jpg"
    },
      {
        id:3,
        name: "Maldives",
        country: "Maldives",
        image: "/maldives.jpg"
    },
]

/*
TODO: Come With Me - Explore Page

- Created search state and handleOnChange.
- Used .filter() to search destinations by name (case-insensitive).
- NEXT: Update filtering to check both name and country using ||.
- Use .map() on filteredDestinations to display matching cards.
- Show "No destinations found" when there are no matches.
- Later: Reuse the Hero search bar as a SearchBar component.
*/

const filteredDestinations = destinations.filter((destination) => destination.name.toLowerCase().includes(search.toLowerCase()))

    const [search , setSearch] = useState("")

    const handleOnChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }
    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                {/* LEFT HERO SECTION */}
                <div className='flex flex-col bg-mauve-200 min-h-[500px] p-5'>
                    <div className='bg-zinc-200 rounded-lg shadow-md p-3 text-left w-fit'>PLANE-ICON PLAN EXPLORE EXPERIENCE</div>
                    <div className=' bg-400 p-5'>
                        <h3 className='text-4xl font-bold'>Your next<br/> adventure <br />starts here.</h3>
                        <p>Discover incredible places, plan unforgettable trips, and make memories for a lifetime.</p>
                    </div>
                    <div className=' p-5'>
                        <form className='flex w-full max-w-[500px] gap-4'>
                            <input 
                            className='bg-zinc-200 flex flex-1 rounded-lg shadow-lg p-5 ' 
                            type='text' name='searchbar' 
                            id='searchbar' 
                            value={search}
                            onChange={handleOnChange}
                            placeholder='Where do you want to go?'></input>
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
