import React from 'react';

import advrtsquare1 from '../assets/images/advrtsquare1.jpg';
import advrtsquare2 from '../assets/images/advrtsquare2.jpg';
import advrtsquare3 from '../assets/images/advrtsquare3.jpg';

// const styles = {
//   section: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//   },
// };

const FrontImgCardSec = () => {
  const FrontImgeArray = [
    { frontBoxImg: advrtsquare1, name: 'Printed Short Sleeve' },
    { frontBoxImg: advrtsquare2, name: 'Designer Edition' },
    { frontBoxImg: advrtsquare3, name: 'Short Sleeve Blanks' },

  ];
  // w-6/12 md:w-3/12 lg:w-2/12 xl:w-2/12
  return (
    <div className='FrontAdvertiseItemSec grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {FrontImgeArray.map((box, index) => (
        <div key={index} className='innerFrontAdvertise '>
          <div className='FrontAdvertiseProductImg relative after:absolute after:content-[] after:block after:bottom-[-6px] after:w-full after:text-white after:text-center after:bg-[linear-gradient(0deg,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.45)_30%,_rgba(0,0,0,0.16)_66%,_rgba(0,0,0,0)_100%)] after:h-[75px]  '>
            <a href="/" className='w-full block'>
              <img src={box.frontBoxImg} alt={`Image ${index + 1}`} className='w-full h-auto ' />
              <p className='mt-2 text-center text-black absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[15px] '>{box.name} </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontImgCardSec;