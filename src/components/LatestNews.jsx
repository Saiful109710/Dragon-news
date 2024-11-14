import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const LatestNews = () => {

  const [allNews,setAllNews] = useState([])

  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/category/08')
    .then(res=>res.json())
    .then(data=>setAllNews(data.data))
  },[])

  console.log(allNews)



 
  return (
    <div className='flex items-center gap-5 bg-gray-200 py-2 px-2'>
        <span className='bg-[#D72050] px-3 py-2 rounded-md text-white'>Latest</span>
        <Marquee pauseOnHover={true} speed={100} className='space-x-4 text-gray-600'>
           <span className='space-x-5'>
           {
              allNews.map((news)=><Link to={`/news/${news._id}`}>{news.title}</Link>)
            }
           </span>
        </Marquee>
    </div>
  )
}

export default LatestNews
