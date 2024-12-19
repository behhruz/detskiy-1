import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Group from '../assets/Group.png';
import Heart from '../assets/Heart.svg';
import Logo from '../assets/Logo.png';
import Info from '../assets/Info.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // State to store categories
  const [categories, setCategories] = useState([]);

  // Fetch categories from API
  useEffect(() => {
    fetch('http://localhost:5000/chairs')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='w-full'>
      {/* First Topbar */}
      <div className="w-full p-[20px] px-[200px] bg-[rgb(39,35,67)]">
        <div className="text-[rgb(143,141,157)] p-[10px] flex justify-between">
          <p>{t('freeShipping')}</p>
          <div className="flex gap-[20px]">
            <details>
              <summary>{i18n.language}</summary>
              <ul className="bg-base-100 rounded-t-none p-2 bg-[rgb(39,35,67)]">
                <li><button onClick={() => changeLanguage('uz')}>uzb</button></li>
                <li><button onClick={() => changeLanguage('ru')}>rus</button></li>
                <li><button onClick={() => changeLanguage('en')}>eng</button></li>
              </ul>
            </details>
            <p>{t('faqs')}</p>
            <p>{t('needHelp')}</p>
          </div>
        </div>
      </div>

      {/* Second Topbar */}
      <div className="w-full p-[20px] px-[200px] bg-[#f0f2f3]">
        <div className="flex justify-between items-center p-[20px]">
          <img src={Logo} alt="Logo" />
          <input
            className='p-[10px] w-[400px] border-none rounded-[4px]'
            placeholder={t('searchPlaceholder')}
            type="text" />
          <div className="flex items-center gap-[20px]">
            <div className="w-[100px] bg-white p-[10px] border-none rounded-[4px] flex gap-[5px]">
              <img src={Info} alt="Info" />
              <div className="border-none rounded-[50%] w-[20px] h-[20px] bg-[rgb(0,117,128)] flex justify-center items-center">
                <p className='text-white'>1</p>
              </div>
            </div>
            <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] flex justify-center items-center">
              <img src={Heart} alt="Heart" />
            </div>
            <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] flex justify-center items-center">
              <Link to="/login">
                <img src={Group} alt="Group" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full border px-[200px]">
        <div className="flex justify-between items-center p-[20px]">
          <div className="flex gap-[20px] items-center">
            <details className="dropdown">
              <summary className="m-1 border p-[10px] cursor-pointer">{t('categories')}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><Link to="/products/wingchair" className="hover:text-blue-400">Wing Chair</Link></li>
                <li><Link to="/products/woodenchair" className="hover:text-blue-400">Wooden Chair</Link></li>
                <li><Link to="/products/deskchair" className="hover:text-blue-400">Desk Chair</Link></li>
                <li><Link to="/products/parkchair" className="hover:text-blue-400">Park Chair</Link></li>
                <li><Link to="/products/devanchair" className="hover:text-blue-400">Devan Chair</Link></li>
                <li><Link to="/products/bed" className="hover:text-blue-400">Bed</Link></li>
              </ul>

            </details>
            <Link to="/home" className='hover:text-blue-400'>{t('home')}</Link>
            <Link to="/shop" className='hover:text-blue-400'>{t('shop')}</Link>
            <Link to="/product" className='hover:text-blue-400'>{t('product')}</Link>
            <Link to="/pages" className='hover:text-blue-400'>{t('pages')}</Link>
            <Link to="/about" className='hover:text-blue-400'>{t('about')}</Link>
          </div>
          <p>{t('contact')}: (808) 555-0111</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
