import React from 'react';
import { useTranslation } from 'react-i18next';
import Group from '../assets/Group.png';
import Heart from '../assets/Heart.svg';
import Logo from '../assets/Logo.png';
import Info from '../assets/Info.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='w-full'>
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
      <div className="w-full p-[20px] px-[200px] bg-[#f0f2f3]">
        <div className="flex justify-between items-center p-[20px]">
          <img src={Logo} alt="" />
          <input
            className='p-[10px] w-[400px] border-none rounded-[4px]'
            placeholder='Search here...' type="text" />
          <div className="flex items-center gap-[20px]">
            <div className="w-[100px] bg-white p-[10px] border-none rounded-[4px] flex gap-[5px]">
              <img src={Info} alt="" />
              <div className="border-none rounded-[50%] w-[20px] h-[20px] bg-[rgb(0,117,128)] flex justify-center items-center">
                <p className='text-white'>1</p>
              </div>
            </div>
            <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] items-center justify-center flex gap-[5px]">
            <NavLink to={"/yrak"} >
                                
                                <img src={Heart} alt="yurak" />
                                </NavLink>  
            </div>
            <div className="w-[50px] bg-white p-[10px] border-none rounded-[4px] items-center justify-center flex gap-[5px]">
              <a href="/login">
                <img src={Group} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border px-[200px]">
        <div className="flex justify-between items-center p-[20px]">
          <div className="flex gap-[20px] items-center">
            <details className="dropdown">
              <summary className=" m-1 border p-[10px]">{t('categories')}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Wing Chair</a></li>
                <li><a>Wooden Chair</a></li>
                <li><a>Desk Chair</a></li>
                <li><a>Park Chair</a></li>
                <li><a>Devan Chair</a></li>
                <li><a>Bed</a></li>
              </ul>
            </details>
            <a href='' className='hover:text-blue-400'>{t('home')}</a>
            <a href='' className='hover:text-blue-400'>{t('shop')}</a>
            <a href='' className='hover:text-blue-400'>{t('product')}</a>
            <Link className='hover:text-blue-400' to={'/pages'}>{t('pages')}</Link>
            <a href='' className='hover:text-blue-400'>{t('about')}</a>
          </div>
          <p>{t('contact')}: (808) 555-0111</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
