import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Specs({icon,title,value,color}) {
  return (
    <div className="w-full p-4 shadow-md lg:max-w-4xl">
            <div className="space-y-2">
                <div>
                    <FontAwesomeIcon icon={icon} className={`h-11 bg-gray-200 p-5 rounded-full ${color}`}/>
                </div>
                <h3 className="text-gray-600 ">
                    {title}
                </h3>
                <p className="text-2xl font-semibold">
                    {value}
                </p>
            </div>
        </div>
  )
}
