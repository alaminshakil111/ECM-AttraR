import React from 'react';
import { FaLock, FaTruck, FaRegSmile } from 'react-icons/fa';

import sslcommerz from '../assets/images/sslcommerz.png';
import delivery from '../assets/images/delivery.png';


const ProductExplain = () => {
  const details = [
    
    {   
      title: 'All Secure Payment Methods',
      icon: <FaLock className="text-2xl text-gray-700 mx-auto mb-3" />,
      image: sslcommerz,
    },
    {   
      title: 'Satisfication Guaranted',
      icon: <FaRegSmile className="text-2xl text-gray-700 mx-auto mb-3" />,
      content: (
        <div className="text-sm text-gray-600">
          <p>Made with premium quality materials.</p>
          <strong className="block mt-1 text-black">Cozy yet lasts the test of time</strong>
        </div>
      ),
    },
    {   
      title: 'World Delivery',
      icon: <FaTruck className="text-2xl text-gray-700 mx-auto mb-3" />,
      image: delivery,

    },


  ];
  // w-6/12 md:w-3/12 lg:w-2/12 xl:w-2/12
  return (
    <div className='ProductExplainSec grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 pb-8 px-3  '>
      {details.map((detail, index) => (
            <div key={index} className='ContentExplanation flex flex-col items-center justify-center text-center  '>
              {detail.icon}
              <h6 className="text-lg font-semibold mb-2">{detail.title}</h6>
              {detail.image ? (
                <img
                  src={detail.image}
                  alt={detail.alt}
                  className="mx-auto h-10 object-contain"
                />
              ) : (
                detail.content
              )}
            </div>
          ))}
    </div>
  );
};

export default ProductExplain;