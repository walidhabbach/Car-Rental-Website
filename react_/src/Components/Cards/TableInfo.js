import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery, faC, faChair, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faDoo } from '@fortawesome/free-solid-svg-icons';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import Specs from './Specs';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal'
import ReservationForm from './ReservationForm';
export default function TableInfo({data,carburant_type,gear_box}) {

  const [carburant,setCarburant] = useState("");
  const [modalIsOpen,setModalIsOpen] = useState(false);

  
  const specs_ = [
     { icon: faGear, title: 'Gearbox',value: gear_box,color: 'text-cyan-500'},
     { icon: faDoorOpen, title: 'Doors',value: data.doors,color: 'text-yellow-500'},
     { icon: faCarBattery, title: 'Power',value: data.power,color: 'text-red-500'},
     { icon: faChair, title: 'seats',value: data.seats,color: 'text-green-500'},
     { icon: faGasPump, title: 'Fuel type',value: carburant_type,color: 'text-blue-500'},
  ]
  return (
        <div className='w-full px-12'>
             <h3 className='font-bold text-4xl mb-5'>Principal Specs</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            specs_.map((spec,index)=>{
                                return(
                                    <Specs
                                      key={index}
                                      icon={spec.icon}
                                      title={spec.title}
                                      value={spec.value}
                                      color={spec.color}
                                    />
                                )
                            })
                        }
                </div>
                
                <ReservationForm data={data}/>           
                
        </div>
  )
}
