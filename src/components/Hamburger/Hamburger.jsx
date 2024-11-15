import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import AuthButton from '../NavBar/AuthButton';

function Hamburger({ navitem }) {
  const [currentStatus, setStatus] = useState(false);

  return (
    <div className="relative">
      
      <div
        className="text-custom-purple hover:text-white font-extrabold text-4xl block lg:hidden cursor-pointer"
        onClick={() => setStatus(!currentStatus)}
      >
        <RxHamburgerMenu />
      </div>

      
      <div
        id="dropDown"
        className={`${
          currentStatus ? 'translate-x-0' : 'translate-x-full'
        } fixed top-20 right-0 h-40 w-32 bg-[#9e67a12d]  backdrop-blur-lg shadow-xl p-4 transition-transform duration-300 z-50 rounded-xl lg:hidden`}
      >
        {navitem.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block text-white font-bold text-xl hover:text-custom-purple py-2"
          >
            {item.name}
          </Link>
        ))}
        <AuthButton/>
      </div>
    </div>
  );
}

export default Hamburger;
