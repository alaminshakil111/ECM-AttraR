import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const ProductsCatagory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      label: 'New Arrival',
      count: 0
    },
    {
      label: 'Top Selling',
      count: 123
    },
    {
      label: 'Free Delivery',
      count: 89
    },
    {
      label: 'Mens',
      count: 0,
      children: [
        {
          label: 'Half Sleeve T-Shirt',
          count: 0,
          children: [
            { label: 'Blank', count: 0 },
            { label: 'Cut & Stitch', count: 0 },
            { label: 'Printed', count: 0 },
            { label: 'Cut & Stitch (Designer Edition)', count: 0 }
          ]
        },
        {
          label: 'Full Sleeve T-Shirt',
          count: 0,
          children: [
            { label: 'Blank', count: 0 },
            { label: 'Cut & Stitch', count: 0 },
            { label: 'Printed', count: 0 },
            { label: 'Cut & Stitch (Designer Edition)', count: 0 }
          ]
        }
      ]
    },
    {
        label: 'WoMens',
        count: 0,
        children: [
          {
            label: 'Half Sleeve T-Shirt',
            count: 0,
            children: [
              { label: 'Blank', count: 0 },
              { label: 'Cut & Stitch', count: 0 },
              { label: 'Printed', count: 0 },
              { label: 'Cut & Stitch (Designer Edition)', count: 0 }
            ]
          },
          {
            label: 'Full Sleeve T-Shirt',
            count: 0,
            children: [
              { label: 'Blank', count: 0 },
              { label: 'Cut & Stitch', count: 0 },
              { label: 'Printed', count: 0 },
              { label: 'Cut & Stitch (Designer Edition)', count: 0 }
            ]
          }
        ]
      }
    // Add Kids, Womens similarly
  ];

  const renderCategories = (items, level = 0) => {
    return (
      <ul className={clsx("ml-0", level === 1 && "ml-4", level === 2 && "ml-8")}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="mb-1">
            <label className={`flex items-center gap-2 ${level === 0 ? 'font-semibold' : level === 1 ? 'ml-2' : 'ml-4'}`}>
              <input type="checkbox" />
              <strong className="text-sm">{item.label}</strong>
              <span className="text-xs text-gray-500">({item.count})</span>
            </label>
            {item.children && renderCategories(item.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='CatagoryFilter'>
      {/* Sidebar Toggle Button for small screens */}
      <button className="lg:hidden p-2 bg-blue-500 text-white mb-2 rounded"
        onClick={() => setIsOpen(!isOpen)} >
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      {/* Sidebar */}
      <div className={clsx("fixed lg:static top-0 left-0 h-full lg:h-auto w-85 lg:w-auto bg-white lg:bg-transparent shadow-lg transition-transform duration-300 z-40",
          {
            "-translate-x-full": !isOpen,
            "translate-x-0": isOpen,
            "lg:translate-x-0": true,
            "hidden lg:block": !isOpen
          }
        )} >
        {/* <div className="p-4 overflow-y-auto h-full lg:h-auto">
          {renderCategories(categories)}
        </div> */}
        <div className="relative p-4 overflow-y-auto h-full lg:h-auto">

        {/* Close Button (Visible only on small screens) */}
        <button
          className="absolute top-2 right-2 text-gray-700 lg:hidden"
          onClick={() => setIsOpen(false)}>
          ✕
        </button>

        {renderCategories(categories)}
        </div>
      </div>


    </div>
  );
};

export default ProductsCatagory;
