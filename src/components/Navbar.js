import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="Navbar bg-black">
      <div className="navbar-container text-white p-6 flex items-center justify-between mx-auto max-w-4xl">
      <div className="navbar-title ">
        <h2 className="text-3xl font-extrabold">Anime Chart</h2>
      </div>
      <ul className="flex">
        <li className="px-3 ">
         <Link to="/seasions">Seasons</Link>

        </li>

        <li>
         <Link to="/schedule">Schedule</Link>

        </li>

        <li className="px-3">
         <Link to="/manga">Manga</Link>

        </li>
      </ul>

      <div className="anime-search">
      <Link to="/search">
      <i class="fas fa-search">
      </i>

      </Link>
      </div>
      </div>

      
    </div>
  )
}
