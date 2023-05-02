import React from 'react';

const CarCard = ({ image, title, details }) => {
    return (
        <>
            {/* 
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{details}</p>
            </div> */}
            <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg m-4">
                <img className="w-full" src={image} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{details}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Rent Now
                    </button>
                </div>
            </div>
        </>

    );
};

export default CarCard;
