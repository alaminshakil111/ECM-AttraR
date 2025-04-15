import React from 'react';

import offer1 from '../assets/images/offer1.jpg';
import offer2 from '../assets/images/offer2.jpg';
import offer3 from '../assets/images/offer3.jpg';

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

const FullSleeveShirt = () => {
  const boxes = [
    { itemBoxImg: offer1, price: '$25.00', oldPrice: '$75.00' },
    { itemBoxImg: offer2, price: '$30.00', oldPrice: '$70.00' },
    { itemBoxImg: offer3, price: '$20.00', oldPrice: '$70.00' },
    { itemBoxImg: offer2, price: '$40.00', oldPrice: '$70.00' },
    { itemBoxImg: offer1, price: '$18.99', oldPrice: '$78.99' },
    { itemBoxImg: offer3, price: '$22.50', oldPrice: '$72.50' },
    { itemBoxImg: offer2, price: '$35.00', oldPrice: '$75.00' },
    { itemBoxImg: offer1, price: '$28.00', oldPrice: '$78.00' },
    { itemBoxImg: offer3, price: '$19.00', oldPrice: '$79.00' },
    { itemBoxImg: offer2, price: '$32.00', oldPrice: '$72.00' },
    { itemBoxImg: offer1, price: '$21.99', oldPrice: '$71.99' },
    { itemBoxImg: offer3, price: '$26.75', oldPrice: '$76.75' },
  ];
  // w-6/12 md:w-3/12 lg:w-2/12 xl:w-2/12
  return (
    <div className='newArrivalItemSec grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
      {boxes.map((box, index) => (
        <div key={index} className='newArrival '>
          <div className='newArrivalProductImg relative '>
            <a href="/" className='w-full block'>
              <img src={box.itemBoxImg} alt={`Image ${index + 1}`} className='w-full h-auto ' />
              <div className='mt-2 text-center text-black absolute top-[-19px] left-1/2 transform -translate-x-1/2 -skew-x-23 bg-white/80 text-[12px] px-2 rounded-bl-[4px]
               rounded-br-[4px] '>
                <p>{box.price} </p>
                <p>{box.oldPrice} </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullSleeveShirt;