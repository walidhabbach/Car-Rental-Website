import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reservations, { Cars } from '../../data/dataFromDB';
import APISerive from '../../data/ApiService';
import {useCookies} from 'react-cookie';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
Modal.setAppElement('#root');
export const ReservationCard = ({price,status,message,date_depart,date_arrive,id}) => {
    const cars = Cars()
    const reservations = Reservations()
    const [token, setToken] = useCookies(['mytoken'])
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const customStyles = {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '600px',
          width: '100%',
          padding: '20px',
          borderRadius: '5px',
        },
      };

    //for each reservation there is a car associated with it : 
    const getImageFromReservation = () => 
    {
        if(reservations.length != 0){
            console.log("this is the id : of reservation : " + id)
            let filteredreservation____ = reservations.filter((reservation) => reservation.id == id)
            console.log(filteredreservation____)
            let filteredCars___ = cars.filter((car) => car.idcar == filteredreservation____[0].idcar)
            if(filteredCars___[0] != undefined)
                return filteredCars___[0].image;
        }
    }

    const handleSubmit = () => 
    {
        APISerive.DeleteReservation(id,token)
        .then((response) => {
            setModalIsOpen(true)
            setTimeout(() => {
                window.location.reload()
            },1000)
        })
        .catch((error) => console.log(error))
    }
    return (
        <>
            <div className="w-full rounded overflow-hidden shadow-lg m-4 bg-white flex justify-between p-4">
                <div className="py-4">
                    <h3 className="font-bold py-5 text-2xl text-red-500">Reservation numéro : {id}</h3>
                    <p className="text-gray-700 text-base py-2"><span className='font-bold'>From : </span>  {date_depart} <span className='font-bold'>To : </span>  {date_arrive}</p>
                    <p className="text-gray-700 text-base py-2"><span className='font-bold'>Your message: </span>  {message}</p>
                    <p className="text-gray-700 text-base py-2"><span className='font-bold'>Price of reservation : </span>  <span className='text-green-700'>{price} MAD</span> </p>
                    <p className={`${status ? 'text-green-500 py-2' : 'text-red-500 py-2'}`}><span className='text-black font-bold'>Status :</span> {`${status ? 'Your reservation is confirmed come over to pick up your car.' : 'Not confirmed yet by the agency.'} `}</p>
                    <button className='py-2 px-7 rounded-sm mt-3 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white' onClick={() => handleSubmit()}>Cancel</button>
                </div> 
                <div className="h-52 w-52 relative">
                    <div className="h-full w-full object-cover object-center rounded flex flex-col justify-center items-center">
                        <img src={`data:image/png;base64,${getImageFromReservation()}`} className=""/>
                    </div>
                </div>
            </div>

            {
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faCheckCircle} className='h-14 text-green-400'/>
                            <h2 className=' text-2xl flex items-center px-4'>Successfully deleted!</h2>
                        </div>
                    </Modal>
            }
       </>

    );
};





