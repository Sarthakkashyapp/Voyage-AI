import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {

  const itinerary = trip.tripData?.itinerary;

  if (!Array.isArray(itinerary) || itinerary.length === 0) {
    return (
      <div>
        <h2 className='font-bold text-lg mt-4'>Places to Visit</h2>
        <p>No itinerary available</p>
      </div>
    );
  }
  return (
    <div>
      <h2 className='font-bold text-lg mt-4'>Places to Visit</h2>

      <div>
        {trip.tripData?.itinerary.map((item,index)=>(
            <div className='mt-5'>
                <h2 className='font-medium text-lg'>{item.day}</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                {item.plan.map((place,index)=>(
                    <div className='my-3'>
                        <h2 className='font-medium text-sm text-violet-900'>{place.time}</h2>
                        <PlaceCardItem place={place}/>
                    </div>
                ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
