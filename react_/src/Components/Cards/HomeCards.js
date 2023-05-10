import React from 'react'
import data from '../../data/dataservices'
export default function HomeCards() {
  return (
    <div className=' bg-gradient-to-b w-full from-gray-800 to-black'>
         <div className='text-center'>
              <h1 className='font-bold text-4xl inline border-b-2 border-gray-500 text-white capitalize'>Our services</h1>
         </div>
         <div className="grid lg:grid-cols-3 gap-12 md:p-14 md:grid-cols-2 w-5/6 m-auto">
             {
                data.map((service,index) => {
                    return(
                        <div className="" key={index}>
                            <div className={`shadow-md py-16  rounded-lg ${service.style}`} key={index}>
                                     <div >
                                        <img src={service.image} className="rounded mx-auto" height={150} width={150}/>
                                    </div>
                                    <p className='mx-auto text-center my-5 w-2/4 text-gray-500 '>{service.description}</p>
                            </div>
                        </div>
                    )
                })
             }
         </div>
    </div>
  )
}
