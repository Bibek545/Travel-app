import React from 'react'
import Hero from './home/Hero'
import PopularDestination from './home/PopularDestination'
import TravelInspiration from './home/TravelInspiration'

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <div className='flex justify-between items-center gap-10 p-3 bg-zinc-200 rounded-lg shadow-md'>
                    <div>
                        <h6>Discover</h6>
                        <p>Find amazing destinations and hidden gem around the world</p>
                    </div>
                    <div>
                        <h6>Plan</h6>
                        <p>Create personalised trips with your favourite places.</p>
                    </div>
                    <div>
                        <h6>Save</h6>
                        <p>Keep track of places you love and build your travel lists.</p>
                    </div>
                    <div>
                        <h6>Explore Together</h6>
                        <p>Plan trips with friends and share your adventures.</p>
                    </div>

                </div>
                {/* popular destination */}
                <div className='flex flex-col bg--200 rounded-lg shadow-md p-5'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h3 className='font-xl font-bold'>Popular Destinations</h3>
                            <p>Explore some of the most loved places around the world.</p>
                        </div>
                        <div className='pr-'>
                            <p>View all destinations </p>
                        </div>


                    </div>

                    <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6 p-5'>
                        <PopularDestination />
                    </div>
                </div>

                {/* travel inspiration */}

                <div className='flex flex-col bg--200 rounded-lg shadow-md p-5'>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className='font-xl font-bold'>Travel Inspiration</h3>
                            <p>Get Inspired with travel ideas, trips and guides</p>
                        </div>
                        <div className='pr-5'>
                            <p>View all articles </p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-6 p-5'>
                        <TravelInspiration />
                    </div>
                </div>





            </div>
        </>
    )
}

export default Home
