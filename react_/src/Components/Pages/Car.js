import { importAttribute } from '@babel/types';
import React from 'react';
import CarCard from '../Cards/CarCard';
import { RangeInput, BrandSelect, FuelSelect, SearchBox } from '../Cards/SearchCard'

export default function Car() {
  const car = {
    make: 'Tesla',
    model: 'Model S',
    image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg'
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-200 w-full md:w-1/3 py-4 px-6">
          <h1 className="text-2xl font-bold">Car Catalog</h1>
          <form className="mt-4">
            <SearchBox />
            <RangeInput />
            <BrandSelect />
            <FuelSelect />

          </form>
        </div>

        <div className="w-full md:w-2/3 py-4 px-6">
          <h1 className="text-center font-bold text-xl mb-4">Car Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CarCard image={car.image} title={car.make} details={car.model} />
            <CarCard image={car.image} title={car.make} details={car.model} />
            <CarCard image={car.image} title={car.make} details={car.model} />
            <CarCard image={car.image} title={car.make} details={car.model} />
          </div>
        </div>
      </div>


    </>
  );
}
