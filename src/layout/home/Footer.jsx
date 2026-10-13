import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-4 p-5 bg-olive-200'>
                <div>
                    <h4 className='text-2xl font-bold'>Come With Me</h4>
                    <p>Discover new places, plan unforgettable adventures, and explore the world together.</p>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Company</h4>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Explore</h4>
                    <p>Destinations</p>
                    <p>Travel Inspiration</p>
                    <p>Trip Planner</p>
                </div>

                <div>
                    <h4 className='text-xl font-bold'>Follow Our Journey</h4>
                    <div className='flex gap-4'>
                        <p>Insta</p>
                        <p>Facebook</p>
                        <p>Youtube</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
