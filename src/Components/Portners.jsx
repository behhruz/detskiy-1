import React from 'react'
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

const Portners = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex gap-[80px] p-4">
                <img src={img1} alt="Картинка 1" className="w-20 h-20" />
                <img src={img2} alt="Картинка 2" className="w-20 h-20" />
                <img src={img3} alt="Картинка 3" className="w-20 h-20" />
                <img src={img4} alt="Картинка 4" className="w-20 h-20" />
                <img src={img5} alt="Картинка 5" className="w-20 h-20" />
                <img src={img6} alt="Картинка 6" className="w-20 h-20" />
                <img src={img7} alt="Картинка 7" className="w-20 h-20" />
            </div>
        </div>

    )
}

export default Portners