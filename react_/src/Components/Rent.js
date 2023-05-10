import React from 'react'
import {CarCard} from './Cards/CarCard';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Details from './Pages/Details';
import { useCookies } from 'react-cookie';
function Rent() {
  const [data,setData] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [token, setToken] = useCookies(['mytoken'])

  useEffect(() => {
    axios.get('http://localhost:8000/django_app/Voiture/')
    .then(response => setData(response.data))
    .catch(error => console.error(error));
  },[])

  return (
    <>
        <h1 className='text-4xl p-11 text-center '>All Cars available for renting</h1>
        <span className="block border-t border-gray-300 "></span>
       <div className="w-full md:w-2/3 py-4 px-6 mx-auto mb-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {token.myId ? data.map((data,index) => {
                  return(
                    <CarCard key={data.idcar} image={data.image} title={data.model} details={data.idcar} id={data.idcar}/>
                  )
               }) : <div className='text-2xl text-center text-red-500'>You should connect first</div>
             }
          </div>
        </div>
    </>
  )
}


export default Rent