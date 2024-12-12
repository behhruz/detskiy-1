import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Yurak = () => {
  const [clickedProducts, setClickedProducts] = useState([]);

  useEffect(() => {
    const getClickedProducts = () => {
      const storedProducts = localStorage.getItem('clickedProducts');
      if (storedProducts) {
        setClickedProducts(JSON.parse(storedProducts));
      }
    };

    getClickedProducts();
  }, []);

  return (
    <div>
      <NavLink to="/home">
        <p className='text-[20px] p-[20px] text-red-600'>Назад</p>
      </NavLink>
      <h1>Отправленные карточки продуктов</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clickedProducts.map((product, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="text-gray-700 mt-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yurak;
