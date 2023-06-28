import React from 'react'
import  Bg from '../images/about.png'
import { Link } from 'react-router-dom'
import HomeCards from './Cards/HomeCards'
import postion from '../images/position.gif'

export default function Home() {
  return (
    <div className=' h-screen bg-gradient-to-b w-full from-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl text-white font-bold">
            Location voiture
          </h2>
          <p className="text-gray-500 py-4 max-w text-xl">
           Bienvenue sur notre site de location de voitures en ligne ! 
           Nous sommes une entreprise spécialisée dans la location de voitures 
           pour répondre à tous vos besoins en matière de transport
          </p>

          <div>
            <Link
              to=""
              smooth
              duration={500}
              className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Explore
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Bg}
            className="rounded-2xl mx-auto w-4/5"
          />
        </div>
      </div>
      <div>

      </div>
      <HomeCards/>
    </div>
  )
}
