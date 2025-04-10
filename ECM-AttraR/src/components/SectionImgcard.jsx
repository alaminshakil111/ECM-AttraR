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

const Section = () => {
  const boxes = [
    { itemBoxImg: indeximg1 },
    { itemBoxImg: indeximg2 },
    { itemBoxImg: indeximg3 },
    { itemBoxImg: indeximg4 },
    { itemBoxImg: indeximg5 },
    { itemBoxImg: indeximg6 },
    { itemBoxImg: indeximg4 },
    { itemBoxImg: indeximg2 },
    { itemBoxImg: indeximg3 },
    { itemBoxImg: indeximg4 },
    { itemBoxImg: indeximg5 },
    { itemBoxImg: indeximg6 },
  ];
  // w-6/12 md:w-3/12 lg:w-2/12 xl:w-2/12
  return (
    <div className='newArrivalItemSec grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
      {boxes.map((box, index) => (
        <div key={index} className='newArrival '>
          <div className='newArrivalProductImg '>
            <a href="#" className='w-full'>
              <img src={box.itemBoxImg} alt={`Image ${index + 1}`} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;