
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

 

//   const Pages = () => {
//     // const [images, setImages] = useState([]); 
//     // const [error, setError] = useState(null);
//     // const [loading, setLoading] = useState(true);

//     useEffect(()=> {
//       fetch('http://localhost:5000/muhammadali')
//       .then(response => {
//           if (!response.ok) {
//               throw new Error(`Serverdan javobda xato: ${response.status}`);
//           }
//           return response.json();
//       })
//       .then(data => {
//           if (data['muhammadali']) {
//               data['muhammadali'].forEach(item => {
//                   console.log(`ID: ${item.id}, Image: ${item.image}`);
//               });
//           } else {
//               console.error('JSON-da "muhammadali" kaliti topilmadi.');
//           }
//       })
//       .catch(error => {
//           console.error('Maʼlumotni yuklashda xato:', error);
//       });
  
//     },[])
//     return (
    
//       <div className=''>
//         <Navbar/>
//         <div className='container mx-auto px-8 '>
//           <img src={Image} alt="" className='w-[312px] h-[312px] bg-slate-100 rounded-[10px]'/>
//           <Link className='bg-blue-400  text-4xl pt-1 pb-1 pl-2 pr-2 rounded-[30px]' to={'/'}>Go home</Link>
//         </div>
//       </div>
//     );
//   };

//   export default Pages;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Pages = () => {
  // State-lar: rasmlar va yuklash holatini boshqarish
  const [images, setImages] = useState([]); // Rasmlarni saqlash
  const [error, setError] = useState(null); // Xato holati
  const [loading, setLoading] = useState(true); // Yuklash holati

  // Ma'lumotni yuklash uchun useEffect
  useEffect(() => {
    fetch('http://localhost:5000/muhammadali')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Serverdan javobda xato: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
          setImages(data); // Rasmlarni state-ga yuklash
        }
      )
      .catch((error) => {
        console.error('Maʼlumotni yuklashda xato:', error);
        setError('Maʼlumotni yuklashda xato!');
      })
      .finally(() => setLoading(false)); // Yuklashni tugatish
  }, []);

  // UI render qismi
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto flex items-center justify-center gap-9 mt-5 ">
        {loading && <p>Yuklanmoqda...</p>} {/* Yuklash holatini ko'rsatish */}
        {error && <p className="text-red-500">{error}</p>} {/* Xato holatini ko'rsatish */}
        <div className="grid grid-cols-3 gap-4">
          {/* Rasmlarni dinamik tarzda chiqarish */}
          {images.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={`Image ${item.id}`}
              className="w-[312px] h-[312px] bg-slate-100 rounded-[10px] "
            />
          ))}
        </div>
        
      </div>
      <Link
          className="bg-blue-400 text-4xl pt-1 pb-1 pl-2 pr-2 rounded-[30px]"
          to={'/'}
        >
          Go home
        </Link>
    </div>
  );
};

export default Pages;
  