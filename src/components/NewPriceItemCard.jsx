import React from 'react';

import indeximg1 from '../assets/images/indeximg1.jpg';
import indeximg2 from '../assets/images/indeximg2.jpg';
import indeximg3 from '../assets/images/indeximg3.jpg';
import indeximg4 from '../assets/images/indeximg4.jpg';
import indeximg5 from '../assets/images/indeximg5.jpg';
import indeximg6 from '../assets/images/indeximg6.jpg';

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

const NewPriceItemCard = () => {
  const boxes = [
    { itemBoxImg: indeximg1, price: '$25.00' },
    { itemBoxImg: indeximg2, price: '$30.00' },
    { itemBoxImg: indeximg3, price: '$20.00' },
    { itemBoxImg: indeximg4, price: '$40.00' },
    { itemBoxImg: indeximg5, price: '$18.99' },
    { itemBoxImg: indeximg6, price: '$22.50' },
    { itemBoxImg: indeximg4, price: '$35.00' },
    { itemBoxImg: indeximg2, price: '$28.00' },
    { itemBoxImg: indeximg3, price: '$19.00' },
    { itemBoxImg: indeximg4, price: '$32.00' },
    { itemBoxImg: indeximg5, price: '$21.99' },
    { itemBoxImg: indeximg6, price: '$26.75' },
  ];
  // w-6/12 md:w-3/12 lg:w-2/12 xl:w-2/12
  return (
    <div className='newArrivalItemSec grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
      {boxes.map((box, index) => (
        <div key={index} className='newArrival '>
          <div className='newArrivalProductImg relative '>
            <a href="/" className='w-full block'>
              <img src={box.itemBoxImg} alt={`Image ${index + 1}`} className='w-full h-auto ' />
              <p className='mt-2 text-center text-black absolute top-[-18px] left-1/2 transform -translate-x-1/2 -skew-x-23 bg-white/80 text-[12px] px-2 rounded-bl-[4px] rounded-br-[4px] '>{box.price} </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewPriceItemCard;