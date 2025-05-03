// import React from 'react'
// import { assets, cities } from '../assets/assets'

// const Hero = () => {
//     return (
//         <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
//             <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
//             {/* <h1 className='text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1> */}
//             {/* <p className='max-w-130 mt-2 text-sm md:tet-base'>Unparalled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today</p> */}

//             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
//                 Discover Your Perfect Gateway Destination
//             </h1>

//             <p className="mt-6 text-lg text-white max-w-2xl mx-auto">
//                 Unparalled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today
//             </p>


//             <form className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto mt-3'>

//                 <div>
//                     <div className='flex items-center gap-2'>
//                         <img src={assets.calenderIcon} alt="destination data" className='h-4' />
//                         <label htmlFor="destinationInput">Destination</label>
//                     </div>
//                     <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
//                     <datalist id='destinations'>
//                         {cities.map((city, index) => (
//                             <option value={city} key={index} />
//                         ))}
//                     </datalist>
//                 </div>

//                 <div>
//                     <div className='flex items-center gap-2'>
//                         <img src={assets.calenderIcon} alt="calenderIcon" className='h-4' />
//                         <label htmlFor="checkIn">Check in</label>
//                     </div>
//                     <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
//                 </div>

//                 <div>
//                     <div className='flex items-center gap-2'>
//                         <img src={assets.calenderIcon} alt="calenderIcon" className='h-4' />
//                         <label htmlFor="checkOut">Check out</label>
//                     </div>
//                     <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
//                 </div>

//                 <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
//                     <label htmlFor="guests">Guests</label>
//                     <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
//                 </div>

//                 <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
//                     <img src={assets.searchIcon} alt="searchIcon" className='h-7' />
//                     <span>Search</span>
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Hero

import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
    return (
        <div className='h-screen bg-[url("/src/assets/heroImage.png")] opacity-95 bg-no-repeat bg-cover bg-center text-white flex items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='w-full max-w-5xl text-center flex flex-col items-center justify-center'>

                <p className='bg-[#49B9FF]/50 px-4 py-1 rounded-full mb-4'>
                    The Ultimate Hotel Experience
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
                    Discover Your Perfect Gateway Destination
                </h1>

                <p className="mt-4 text-base sm:text-lg max-w-2xl">
                    Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
                </p>

                <form className='bg-white text-gray-700 rounded-lg px-6 py-5 mt-6 flex flex-col md:flex-row items-center gap-4  shadow-md'>

                    <div className='w-full md:w-auto'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="destination" className='h-4' />
                            <label htmlFor="destinationInput">Destination</label>
                        </div>
                        <input list='destinations' id="destinationInput" type="text"
                            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                            placeholder="Type here" required />
                        <datalist id='destinations'>
                            {cities.map((city, index) => (
                                <option value={city} key={index} />
                            ))}
                        </datalist>
                    </div>

                    <div className='w-full md:w-auto'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="check-in" className='h-4' />
                            <label htmlFor="checkIn">Check in</label>
                        </div>
                        <input id="checkIn" type="date"
                            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                    </div>

                    <div className='w-full md:w-auto'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="check-out" className='h-4' />
                            <label htmlFor="checkOut">Check out</label>
                        </div>
                        <input id="checkOut" type="date"
                            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                    </div>

                    <div className='w-full md:w-auto flex flex-col'>
                        <label htmlFor="guests">Guests</label>
                        <input min={1} max={4} id="guests" type="number"
                            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-[70px]"
                            placeholder="0" />
                    </div>

                    <button
                        className='flex items-center justify-center gap-2 rounded-md bg-black py-2 px-4 text-white w-full md:w-auto'>
                        <img src={assets.searchIcon} alt="searchIcon" className='h-5' />
                        <span>Search</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Hero

