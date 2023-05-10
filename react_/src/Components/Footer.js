import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='w-full py-5 bg-black text-gray-500 text-center  fixed'>
      <p>&copy; 2023 Example Company. All rights reserved. designed by <Link className='text-cyan-500'>Us</Link></p>
    </footer>
  )
}
