import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Ot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="p-8 bg-gray-10  min-h-[40hv] flex flex-col items-center">
    
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2} 
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-6xl"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 border">
              <p className="text-gray-600 text-lg  leading-relaxed">
                {item.title}
              </p>
              <div className="flex items-center gap-4">
                {item.imgUrl && (
                  <img
                    src={item.imgUrl}
                    alt={item.Name}
                    className="w-16 h-16 rounded-full border border-gray-300"
                  />
                )}
                <div>
                  <h4 className="text-lg font-medium">{item.Name}</h4>
                  <p className="text-sm text-gray-500">{item.nick}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ot;
