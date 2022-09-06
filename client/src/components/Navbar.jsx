import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-zinc-600 flex justify-between px-20 py-2 text-white font-bold">
      
      <Link to="/"><h1 className='text-3xl'>React MySQL</h1></Link>

        <ul className='flex gap-5'>
            <li className='bg-green-500 py-2 px-3 rounded-md'><Link to="/">Home</Link></li>
            <li className="bg-indigo-600 py-2 px-3 rounded-md"><Link to="/new">Form</Link></li>
        </ul>

    </div>
  )
}

export default Navbar
