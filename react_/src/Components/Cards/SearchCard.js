import React, { useState } from 'react'
import { FuelTypes, Brands } from '../../data/dataFromDB';

export function RangeInput(props) {
    const [maxPrice, setMaxPrice] = useState(props.Price);
    console.log(props.Price)
    const handleMaxChange = (e) => {
        const newMaxPrice = parseInt(e.target.value);
        setMaxPrice(newMaxPrice);
        props.onMaxPriceChange(newMaxPrice);
    };

    return (
        <div>
            <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="brand">
                Price
            </label>
            <label htmlFor="max-price">Max Price:</label>
            <input
                className='w-full'
                type="range"
                id="max-price"
                name="max-price"
                max={props.maxPrice}
                value={props.Price}
                onChange={handleMaxChange}
            />
            <span>{maxPrice}</span>
        </div>
    );
}
export function BrandSelect(props) {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleBrandChange = (e) => {
        const brandId = parseInt(e.target.options[e.target.selectedIndex].id);
        const brandName = e.target.value;
        setSelectedBrand(brandName);
        props.onBrandChange(brandId);
    };

    const data = Brands();

    return (
        <div>
            <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="brand">
                Brand
            </label>
            <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="brand" name="brand" value={selectedBrand} onChange={handleBrandChange}>
                <option value="">Select a brand</option>
                {data.sort((a, b) => a.nom.localeCompare(b.nom)).map((brand) => (
                    <option id={brand.idmarque} value={brand.nom}>{brand.nom}</option>
                ))}

            </select>
        </div>
    );
}

export function FuelSelect(props) {
    const [selectedFuel, setSelectedFuel] = useState('');

    const handleFuelChange = (e) => {
        const fuelId = parseInt(e.target.options[e.target.selectedIndex].id);
        const newFuel = e.target.value;
        setSelectedFuel(newFuel);
        props.onFuelChange(fuelId);
    };

    const fuels = FuelTypes();

    return (
        <div>
            <label className="block text-gray-700 font-bold mt-4 mb-2" htmlFor="fuel">
                Fuel Type
            </label>
            <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fuel"
                name="fuel"
                onChange={handleFuelChange}
            >
                <option value="">Select fuel type</option>
                {fuels.map((fuel) => (
                    <option id={fuel.idcarburant} value={fuel.nom}>{fuel.nom}</option>
                ))}
            </select>
        </div>
    );
}


export function SearchBox(props) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        props.onSearchChange(event.target.value);
    };

    const handleSearchClick = () => {
        props.onSearchClick(searchValue);
    };
    return (
        <div className="flex ">
            <input type="text"
                className="border border-gray-400 w-full py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleSearchChange}
                value={searchValue}
                placeholder="Search" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-r-md focus:outline-none focus:shadow-outline"
                onClick={handleSearchClick}>
                Search
            </button>
        </div>

    );
}

