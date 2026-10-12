import React from 'react'

const TravelInspiration = () => {
     const inspirations = [
        {
            id:1,
            name: "Mountain Gateways",
            description: "Best mountain escapes for your next trip",
            image: "/Mountain-gateways.jpg"
        },
             {
            id:2,
            name: "Island Life",
            description: "Beautiful island worth visiting",
            image: "/around-maldives.jpg"
        },
             {
            id:3,
            name: "City Adventures",
            description: "Explore vibrant cities around the sydney",
            image: "/around-the-sydney.jpg"
        },
     ]
    return (
       
        <>
        {inspirations.map((inspiration) => (
            <div 
            key={inspiration.id}
            className='w-full rounded-xl overflow-hidden shadow-md relative'>

                <img 
                src={inspiration.image} 
                alt={inspiration.name} 
                className='w-full aspect-[4/3] object-cover '></img>

                <div className='absolute bottom-15 left-5 text-slate-200 font-bold'>
                    <h4>{inspiration.name}</h4>
                    <p>{inspiration.description}</p>
                </div>
            </div>
        ))
        }
        </>
    )
}

export default TravelInspiration
