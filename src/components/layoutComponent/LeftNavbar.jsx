import React, { useEffect, useState } from 'react'

const LeftNavbar = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res)=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])

    console.log(categories)
  return (
    <div>
        <h2 className='font-semibold'>All Category ({categories.length})</h2>
        <div className='flex flex-col gap-2 mt-3'>
            {
                categories.map((category)=><button key={category.category_id} className='btn'>{category.category_name}</button>)
            }
        </div>
    </div>
  )
}

export default LeftNavbar
