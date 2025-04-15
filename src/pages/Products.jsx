import React from 'react'

import { FaStar, FaShoppingCart } from "react-icons/fa";

import ProductsCatagory from '../components/ProductsCatagorySelection';
import Breadcrumb from '@/components/ui/Breadcumbs';

import indeximg1 from '../assets/images/indeximg1.jpg';
import indeximg2 from '../assets/images/indeximg2.jpg';
import indeximg3 from '../assets/images/indeximg3.jpg';
import indeximg4 from '../assets/images/indeximg4.jpg';
import indeximg5 from '../assets/images/indeximg5.jpg';


const Products = () => {

  const boxes = [
    {
      id: 1,
      image: indeximg1,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      currentPrice: 610,
      originalPrice: 1250,
      discount: "-51%",
      rating: 5,
      reviews: 16,
      link: "productSingle.html",
    },
    {
      id: 2,
      image: indeximg2,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      currentPrice: 610,
      originalPrice: 1250,
      discount: "-51%",
      rating: 5,
      reviews: 16,
      link: "#",
    },
    {
      id: 3,
      image: indeximg3,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      currentPrice: 610,
      originalPrice: 1250,
      discount: "-51%",
      rating: 5,
      reviews: 16,
      link: "#",
    },
    {
      id: 4,
      image: indeximg4,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      currentPrice: 610,
      originalPrice: 1250,
      discount: "-51%",
      rating: 5,
      reviews: 16,
      link: "#",
    },
    {
      id: 5,
      image: indeximg5,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      currentPrice: 610,
      originalPrice: 1250,
      discount: "-51%",
      rating: 5,
      reviews: 16,
      link: "#",
    },
  ];

  const breadcrumbPaths = [
    // { label: "Home", href: "/Home" },
    { label: "Products", href: "#" },
  ];

  return (
    <div className='ProductCatagorySelectSec'>
      <div className='container px-2 sm:px-0'>
        <div className='wrapper'>
          <div className="p-4">
            <Breadcrumb paths={breadcrumbPaths} />
          </div>
          <div className='CatagoryProductsGrid lg:flex '>
            <div className=' lg:w-2/6 xl:w-2/7 '>
              <ProductsCatagory />
            </div>
            
            <div className='ProductsAll lg:w-4/6 xl:w-5/7 '>
              <div className="w-full px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                  {boxes.map((product) => (
                    <div key={product.id}
                      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between" >
                      <a href={product.link} className="block">
                        <div className="p-4 ">
                          <div className="w-full h-48 overflow-hidden mb-4">
                            <img
                              src={product.image}
                              alt="product"
                              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
                          </div>
                          <div className='productsContent'>
                            <div className="text-sm text-gray-700 mb-2 font-medium">
                              {product.title}
                            </div>
                            <div className="flex items-center text-lg font-semibold text-green-600">
                              <span>৳</span>
                              <span>{product.currentPrice}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="line-through text-gray-500 text-sm">
                                <span>৳{product.originalPrice}</span>
                              </div>
                              <span className="bg-red-100 text-red-600 px-2 py-0.5 text-xs rounded">
                                {product.discount}
                              </span>
                            </div>
                            <div className="flex items-center mt-2 text-yellow-500 text-sm">
                              {[...Array(product.rating)].map((_, index) => (
                                <FaStar key={index} className="mr-1" />
                              ))}
                              <span className="text-gray-600 ml-1">
                                ({product.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="px-4 pb-4">
                        <button
                          type="button"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 rounded-sm flex justify-center items-center gap-2 transition-colors duration-300 cursor-pointer "
                        >
                          <FaShoppingCart />
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
   
          
        </div>

      </div>
      
      

      
    </div>
  )
}

export default Products;
