import React from 'react'

const PopularDestination = () => {
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

    return (
        <>
        { destinations.map((destination) => (
            <div 
            key={destination.id}
            className='w-full rounded-xl overflow-hidden shadow-md p-3'>
                <img src={destination.image}
                 alt={destination.name}
                 className='w-full aspect-[4/3] object-cover'></img>

                <div>
                    <h4>{destination.name}</h4>
                    <p>{destination.country}</p>
                </div>
            </div>
        ))

        }
        </>
    )
}

export default PopularDestination
