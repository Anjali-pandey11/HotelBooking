import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating';

const Testimonial = () => {

 


  return (
    <div className = "flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div>
      <Title title = "What Our Guests Say" subTitle = "Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world"/>
   </div>

   <div className='flex flex-wrap items-center gap-6 mt-20 '>
    {testimonials.map((items)=>(
      
      <div key = {items.id} className='rounded-xl p-6 bg-white shadow  '>
        <div  className='flex items-center gap-3 '>
        <img className = "h-12 w-12 rounded-full  " src =  {items.image} alt = "testimonial-imges"/>
          <div className='mt-2'>
          <p className = "text-xl font-playfair" > {items.name}</p>  
          <p className= "text-gray-500"> {items.address}</p> 
           </div>
        </div>
         <div  className="flex items-center gap-1 mt-4">
                           <StarRating
                            rating = {items.rating}
                            />
                        </div>
        <p className= "text-gray-500 mt-4 max-w-90">{items.review}</p>
     </div>    
    
    ))}


   </div>
    </div>
  )
}

export default Testimonial
