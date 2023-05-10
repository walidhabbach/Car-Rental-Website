import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableInfo from '../Cards/TableInfo'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import axios, { all } from 'axios';

export default function Details() {
    const params = useParams()
    const [data,setData] = useState([]);
    const [imageSliderIndex, setImageSliderIndex] = useState(0);
    const [clickImage,setClickImage] = useState(false);
    const [carburant,setcarburant] = useState([])
    const [gearbox,setgearbox] = useState([])
    const [carImages,setCarImages] = useState([])
    useEffect(() => {
        setClickImage(true)
    },[imageSliderIndex])
    //this cars array of objects will be replaced with the data retreived from database
    const cars = [
       {url: 'https://www.auto-data.net/images/f65/Audi-100-4A-C4.jpg '},
       {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
       {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
       {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
       {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
       {url: 'https://www.auto-data.net/images/f113/Audi-100-4A-C4.jpg'},
    ]
    
    useEffect(() => {

        axios.get( `http://localhost:8000/django_app/Voiture/${params.id}/`)     
        .then((response) => 
            {
              setData(response.data)
              console.log(JSON.parse(response.data.image_links))
              setCarImages(JSON.parse(response.data.image_links))
              // console.log(response.data)
              let id_carburant = response.data.idcarburant
              let id_transmission = response.data.idTransmission
              if(id_carburant != undefined) {
                axios.get(`http://localhost:8000/django_app/Carburant/${id_carburant}/`)
                .then((response) => setcarburant(response.data.nom))
                .catch((error) => console.log(error));
              }
              if(id_transmission != undefined) {
                axios.get(`http://localhost:8000/django_app/Transmission/${id_transmission}/`)
                .then((response) => setgearbox(response.data.type))
                .catch((error) => console.log(error));
              }
            }
          ) .catch((error) => console.log(error))  
    },[])

  return (
    <div className='mx-11 my-11 pb-5'>
       <div className='flex justify-between mb-11'>
             <div>
                   
                <h3 className='text-4xl capitalize font-bold '>Car modal : {data.model}</h3>
                <span className="block border-t border-gray-300 my-2 w-100"></span>
                <div className=''>
                    <span className='text-gray-500'>{data.gearbox}</span>
                </div>
             </div>
              <div className='flex'>
                <div className='bg-blue-500 text-white p-5 mx-2 cursor-pointer'>
                    <span className='text-3xl font-bold'>{data.price} MAD</span>
                    <span className='block text-2xl text-gray-300'>Per day</span>
                 </div>
              </div>
             
        </div>
        <div className='flex justify-between'>
              <div>
                  <img src={carImages[imageSliderIndex]} className='rounded-sm max-w-5xl min-w-5xl '/>
                  <div className='flex overflow-scroll h-52 max-w-5xl'>
                    {
                      carImages.map((car,index) => {
                          return(
                              <img src={car} key={index} className={`rounded-md max-h-51 w-52 mt-5 mx-2 ${clickImage && imageSliderIndex == index ? ' border-solid border-4 border-cyan-500' : ''}`} onClick={() => setImageSliderIndex(index)} />
                          )
                      })
                    }
                  </div>
              </div>
              <TableInfo data={data} carburant_type={carburant} gear_box={gearbox}/>
          </div>
             
    </div>
  )
}
