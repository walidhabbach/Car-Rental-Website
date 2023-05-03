import React from 'react'
import CarCard from './Cards/CarCard';

function Rent() {
  const car = {
    make: 'Tesla',
    model: 'Model S',
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg'
  };
  return (
    <div className="">
       <div className="w-full md:w-2/3 py-4 px-6 mx-auto">
          <h1 className="text-center font-bold text-xl mb-4">All cars available for renting</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CarCard image={car.image} title={car.make} details={car.model} />
            <CarCard image={car.image} title={car.make} details={car.model} />
            <CarCard image={car.image} title={car.make} details={car.model} />
            <CarCard image={car.image} title={car.make} details={car.model} />
          </div>
        </div>
    </div>
  )
}


export default Rent