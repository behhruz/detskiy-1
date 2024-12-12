import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const Carusel = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/carusel")
          .then((response) => response.json())
          .then((response) => setData(response));
      }, []);
  return (
    <div className="p-8 bg-gray-10  min-h-[40hv] flex flex-col items-center">
    
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1} 
        navigation
        pagination={{ clickable: true }}
        className="w-[1500px ]  max-w-6xl"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-[50px] bg-white rounded-[50px] shadow-lg flex items-center  justify-between  gap-4 border">
                <div className="">

              <p className="text-[60px] w-[600px]  leading-relaxed">
                {item.title}
              </p>
              <button className="w-[200px] bg-green-700 border rounded-[10px]  text-white p-[10px] " >Shop Now</button>
                </div>
             
                {item.imgUrl && (
                  <img
                    src={item.imgUrl}
                    alt={item.Name}
                    className=" w-[471px]  border-gray-300"
                  />
                )}
                
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carusel
