import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React,{ useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  const [navb,setNav] = useState(false);
  let links = [
    {name: 'Home',link: '/',button: false},
    {name: 'Rent',link: '/rent',button: false},
    {name: 'Car',link: '/car',button: false},
    {name: 'Profile',link: '/profile/ima',button: false},
    {name: 'Sign in/up',link: '',button: true},
  ]
  return (
      <div className='md:px-10 py-7 px-7 flex justify-between items-center bg-black text-white'>
          <div className='flex text-2xl cursor-pointer items-center gap-2'>
              <FontAwesomeIcon className='w-7 h-7 text-cyan-600' icon={faCarAlt} />
              <span className='font-semibold'><Link to="/">Location-voiture</Link></span>
          </div>
          <ul className='md:flex pl-9 md:pl-0 hidden'>
             {
                links.map((item,index) => {
                    return(
                      <li key={index} className='font-medium my-7 md:my-0 md:ml-8 text-gray-500 hover:scale-105 duration-200'>
                         <Link to={item.link} className={` ${item.button == true ? "bg-gradient-to-r from-cyan-500 py-2 px-4 to-blue-500 cursor-pointer text-white rounded" : ""} `}>{item.name}</Link>
                      </li>
                    )
                })
             }
          </ul>
          <div className='cursor-pointer z-10 md:hidden' onClick={() => setNav(!navb)}>
             {navb ? <FontAwesomeIcon className='text-red-600 h-7' icon={faTimes} /> : <FontAwesomeIcon className='text-cyan-600 h-7' icon={faBars} />}
          </div>
           { navb && (
              <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
              {
                links.map((item,index) => {
                  return(
                    <li key={index} className='py-6 px-4 capitalize text-4xl'>
                      <Link to={item.link} className={` ${item.button == true ? "text-1xl bg-cyan-500 py-2 px-4 rounded-md text-white" : ""} `}>{item.name}</Link>
                    </li>
                  )
              })
              }
              </ul>
           )
           }
        </div>
  )
}
