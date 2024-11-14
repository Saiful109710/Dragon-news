import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 bg-gray-200 py-2 px-2'>
        <span className='bg-[#D72050] px-3 py-2 rounded-md text-white'>Latest</span>
        <Marquee pauseOnHover={true} speed={100} className='space-x-4 text-gray-600'>
            <Link to='/news'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, error?</Link>
            <Link to='/news'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, error?</Link>
            <Link to='/news'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, error?</Link>
        </Marquee>
    </div>
  )
}

export default LatestNews
