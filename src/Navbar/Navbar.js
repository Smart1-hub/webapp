import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';

const Navbar = () => (
  <nav className="dflex">
    <div className="arrow dflex">
      <p><Link to="/"><IoIosArrowBack /></Link></p>
    </div>
    <div className='dflex'>
      <p><Link to="/"><FaMicrophone /></Link></p>
      <p><Link to="/"><IoIosSettings /></Link></p>
    </div>
  </nav>
);

export default Navbar;