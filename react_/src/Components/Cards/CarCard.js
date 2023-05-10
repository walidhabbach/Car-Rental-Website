import React from 'react';
import { useState, useEffect } from 'react';
import { faGasPump, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

export const CarCard = ({ id, image, brand, model, price, year, fuel, gearbox }) => {
    return (
        <div className="max-w-md lg:mx-5  rounded overflow-hidden shadow-lg  bg-white">
            <img className="h-80" src={`data:image/png;base64,${image}`} alt={brand} />
            <div className="px-6 py-4">
                <div className="flex justify-between items-center py-2">
                    <p className="font-bold text-lg">{brand} {model}</p>
                    <p className="font-bold bg-blue-700 text-white text-lg px-3 py-2 rounded">{price} DH</p>
                </div>
                <div className="flex justify-between py-2">
                    <p className="text-gray-700 text-base pr-5"><FontAwesomeIcon icon={faGasPump} className="mr-2" />{fuel}</p>
                    <p className="text-gray-700 text-base"><FontAwesomeIcon icon={faCog} className="mr-2" />{gearbox}</p>
                </div>
                <div className="flex justify-between items-center mt-4 py-2">
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-2 px-4 rounded">
                        Rent Now
                    </button>
                    <Link className="text-md text-blue-700 hover:text-blue-900 " to={`/details/${id}`}>
                        view details
                    </Link>
                </div>
            </div>
        </div>



    );
};




