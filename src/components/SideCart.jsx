import { useState } from 'react';
import { FaCartShopping, FaPlus, FaTrash, FaArrowRight } from 'react-icons/fa6';

import indeximg1 from '../assets/images/indeximg1.jpg';

const SideCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = [
    {
      title: 'Mens Premium T-Shirt-Traveler',
      image: indeximg1,
      oldPrice: 1250,
      newPrice: 610,
    },
    // Add more items if needed
  ];

  return (
    <div className={`fixed top-0 z-[10001] h-screen transition-all ease-in-out duration-500 ${isOpen ? 'right-0' : '-right-[278px] lg:-right-[354.5px] '} w-[315px] lg:w-[390px] flex`}>
      <button
        className="sticky top-[40%] w-10 h-10 bg-teal-600 hover:bg-teal-700  text-white rounded-l-md flex justify-center items-center cursor-pointer "
        onClick={() => setIsOpen(!isOpen)} >
        <FaCartShopping />
      </button>

      <div className="w-full h-full bg-white">
        <div className="sticky top-0 bg-black text-white text-center py-3">
          <h6 className="m-0 text-sm">CART</h6>
        </div>

        <div className="bg-white overflow-y-auto h-full pb-25 ">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-gray-100 my-2 mx-2 rounded-t-md">
              <div className="flex justify-between gap-1 p-1 border-b border-gray-300 bg-gray-300 rounded-t-md">
                <a href="#" className="text-sm text-gray-700 hover:text-teal-600 hover:underline">
                  {item.title}
                </a>
                <div className="w-[90px] " >
                    <img src={item.image} alt="cart" className="rounded-tr-md " />
                </div>
              </div>

              <div className="text-sm p-1 border-b border-gray-300 flex justify-between items-center">
                <p className="m-0">Price</p>
                <div>
                  <span className="line-through pr-1 font-sans">৳{item.oldPrice}</span>
                  <span className="font-sans">৳{item.newPrice}</span>
                </div>
              </div>

              <div className="text-sm p-1 border-b border-gray-300 flex justify-between items-center">
                <p className="m-0">Size</p>
                <select className="w-[37%] h-[25px] bg-gray-200 border-none">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="text-sm p-1 border-b border-gray-300 flex justify-between items-center">
                <p className="m-0">Quantity</p>
                <select className="w-[37%] h-[25px] bg-gray-200 border-none">
                  {[1, 2, 3, 4, 5].map(q => (
                    <option key={q}>{q}</option>
                  ))}
                </select>
              </div>

              <div className="text-sm p-1 border-b border-gray-300 flex justify-between items-center">
                <p className="m-0">Subtotal</p>
                <div>
                  <span className="line-through pr-1 font-sans">৳{item.oldPrice}</span>
                  <span className="font-sans">৳{item.newPrice}</span>
                </div>
              </div>

              <div className="text-sm p-1 flex justify-between items-center">
                <button type="button" className="text-sm flex items-center gap-1 bg-green-100 px-2 py-1 rounded cursor-pointer ">
                  <FaPlus /> Add another Size
                </button>
                <button type="button" className="text-sm flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded cursor-pointer ">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 flex justify-between bg-gray-100 p-2">
          <div className="w-1/2 flex flex-col text-center leading-tight font-sans text-black">
            <span className="text-[11px]">Cart Total</span>
            <span>৳610</span>
          </div>
          <button className="w-1/2 bg-green-800 text-white text-sm px-4 py-2 flex items-center justify-center gap-1 cursor-pointer ">
            <a href="/CheckOut" className=' flex items-center gap-1 ' > Checkout <FaArrowRight /> </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
