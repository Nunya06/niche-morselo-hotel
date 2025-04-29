import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'

const RoomDetails = () => {
    const {id} = useParams()

    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(()=>{
       const room =  roomsDummyData.find(room => room._id === id)
       room && setRoom(room)
       room && setMainImage(room.images[0])
    },[])


  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className="flex flex-col md:flex-row items-start md:items-cneter gap-2">
            <h1 className='text-3xl md:text-4xl '>{room.hotel.name} <span className='text-sm'>({room.roomType})</span></h1>
            <p className='text-xs py-1.5 px-3 text-white bg-orange-500 rounded-full '>10% OFF</p>
        </div>
      
    </div>
  )
}

export default RoomDetails
