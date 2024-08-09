import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {

  const[photoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])
  const GetPlacePhoto=async()=>{

    const data={
      textQuery:trip?.userSelection?.location?.label
    }

    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[4].name)

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[4].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all'>
      <img src={photoUrl?photoUrl:"/Hotelss.jpg"} 
      className='object-cover rounded-xl h-[220px] w-full'/>

      <div>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-sm text-gray-800'>{trip?.userSelection.noOfDays} days trip with {trip?.userSelection.budget} budget</h2>
      </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem
