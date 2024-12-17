import React from 'react'
import { NavLink } from "react-router-dom";

const Proekt = () => {
  return (
    <div>
      <footer className="bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-4 gap-8  ">
        
        <div>
          <h2 className="text-lg font-bold text-teal-500">Comforty</h2>
          <p className="text-sm text-gray-600 mt-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
          </p>
          <div className="flex space-x-4 mt-4">
            
            <div className="flex gap-3">

            {/* <a href=""><img className="w-[30px]" src={facebook} alt="" /></a>
            <a href=""><img className="w-[30px]" src={twiter} alt="" /></a>
            <a href=""><img className="w-[30px]" src={insta} alt="" /></a>
            <a href=""><img className="w-[30px]" src={pidaras} alt="" /></a>
            <a href=""><img className="w-[30px] pt-1" src={hetube} alt="" /></a> */}

            </div>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-4">CATEGORY</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/sofa" className="text-gray-500 hover:text-teal-500">
                Sofa
              </NavLink>
            </li>
            <li>
              <NavLink to="/armchair" className="text-gray-500 hover:text-teal-500">
                Armchair
              </NavLink>
            </li>
            <li>
              <NavLink to="/wing-chair" className="text-gray-500 hover:text-teal-500">
                Wing Chair
              </NavLink>
            </li>
            <li>
              <NavLink to="/desk-chair" className="text-gray-500 hover:text-teal-500">
                Desk Chair
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/help" className="text-gray-500 hover:text-teal-500">
                Help & Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="text-gray-500 hover:text-teal-500">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="text-gray-500 hover:text-teal-500">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-4">NEWSLETTER</h3>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Proekt
