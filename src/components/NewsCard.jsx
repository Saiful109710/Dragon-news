import React from 'react'
import { BsBookmark } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
import { FaEye, FaStar } from "react-icons/fa";

import { Link } from 'react-router-dom';


const NewsCard = ({news={}}) => {
    const {
        _id,
        others_info: {is_todays_pick,is_trending},
        category_id,
        rating:{number,badge},
        total_view,
        title,
        author:{name,published_date,img},
        thumbnail_url,
        image_url,
        details
    } = news || {}
    
  return (
    <div className='border rounded-2xl'>
        {/* header */}
        <div className='flex justify-between items-center px-5 py-2 bg-gray-100 border-b mb-3'>
            <div className='flex gap-2 items-center'>
                <div>
                    <img className='w-[50px] h-[50px] rounded-full' src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-gray-700 font-semibold text-sm'>{name}</h2>
                    <p className='text-gray-400 text-xs'>{published_date}</p>
                </div>
            </div>
            <div className='flex gap-2 *:text-gray-600'>
                <BsBookmark className='text-xl'></BsBookmark>
                <IoMdShare className='text-xl'></IoMdShare>
                
            </div>

        </div>
        {/* main */}
        <div className='px-5 border-b py-2'>
            <h2 className='text-2xl font-medium text-gray-600 w-4/5 mb-3'>{title}</h2>
            <figure>
                <img className='w-full h-[400px] object-cover'  src={thumbnail_url} alt="" />
            </figure>
            <p className='text-gray-700 mb-2 mt-2'>
                {details.slice(0,200)}... 
            </p>
            <Link to={`/news/${news._id}`} className='underline text-orange-400' >see more</Link>
        </div>
        {/* footer */}
       <div className='px-5 py-4 flex justify-between items-center'>
             <div className='flex'>
                {
                    Array(5).fill(0).map((_,i)=><FaStar key={i} className={`text-xl ${i<number?'text-orange-400':'text-white'}`}></FaStar>)
                }
                <span className='ml-2'>{number}</span>
            </div>
            <div className='flex gap-2 items-center'>
                <FaEye></FaEye>
                <p>{total_view}</p>
            </div>

       </div>
    </div>
  )
}

export default NewsCard


const obj  = {
    "_id": "374df11ae3d9b8b9ce21f4dc53f59b85",
    "others_info": {
        "is_todays_pick": false,
        "is_trending": true
    },
    "category_id": "01",
    "rating": {
        "number": 4.5,
        "badge": "Excellent"
    },
    "total_view": 798,
    "title": "Zelensky says he had ‘great conversation' with Biden, discussed Kiev's further steps",
    "author": {
        "name": "system",
        "published_date": "2022-08-25 18:45:00",
        "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
    "image_url": "https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png",
    "details": "KIEV, August 25. /TASS/. Ukrainian President Vladimir Zelensky said he had a   great   phone conversation with his US counterpart Joe Biden and discussed with him Ukraine's further actions on Thursday.    Had a great conversation with @POTUS. Thanked for the unwavering U.S. support for Ukrainian people - security and financial,   he wrote on Twitter.   We discussed Ukraine's further steps,   Zelensky added.  On Wednesday, US President Joe Biden announced $2.98 bln in military aid to Ukraine. On the same day, Ukrainian Prime Minister Denis Shmygal reported that the Ukrainian state budget received grant aid from the US in the amount of $3 bln."
}