
import React, { useState } from "react";
import indeximg1 from "../assets/images/indeximg1.jpg";

import Breadcrumb from '@/components/ui/Breadcumbs';


function ProductDetailsSec() {
    const breadcrumbPaths = [
        { label: "Products", href: "/Products" },
        { label: "ProductDetails", href: "/ProductDetailsSec" },

    ];
    const [quantity, setQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
  
    const handleSizeSelect = (size) => setSelectedSize(size);

    const product = {
        image: indeximg1,
        title: "Sitename Means Premium T-shirt - Imagination",
        oldPrice: 785,
        currentPrice: 640,
        sizes: ["M", "L", "XL", "XXL"],
        description: [
          "Sitename Mens Premium Quality t-shirt that offers a smoother feel and more structured fit.",
          "Made with finest quality Combed Compact Cotton.",
        ],
        specifications: [
          "Organic Ringspun Combed Compact Cotton",
          "100% Cotton",
          "Regular fit, Crew Neck Mid-weight, 175 GSM",
          "Reactive Dye, enzyme and silicon washed",
          "Preshrunk to minimize shrinkage",
        ],
        sizeChart: [
          { size: "M", chest: 39, length: 27.5, sleeve: 8.5 },
          { size: "L", chest: 40.5, length: 28, sleeve: 8.75 },
          { size: "XL", chest: 43, length: 29, sleeve: 9 },
          { size: "2XL", chest: 45, length: 30, sleeve: 9.25 },
        ],
        frequentlyBought: [
          {
            image: indeximg1,
            link: "productSingle.html",
            title: "Lorem ipsum dolor sit amet",
            currentPrice: 610,
            oldPrice: 1250,
            discount: "-51%",
            rating: 5,
            ratingCount: 16,
          },
        ],
      };
    
  return (
    <div className='ProductsDetailsSection'>
        <div className='container'>
            <div className='wrapper'>
                <div className="p-4">
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                {/* Product Image & Frequently Bought */}
                <div className="xl:col-span-6">
                    <div className="relative " id="imageMagnifyer">
                        <img src={product.image} alt="Product" className="w-full object-cover rounded" />
                    </div>

                    <div className="hidden sm:block mt-4">
                        <h5 className="text-lg font-semibold mb-2"> Frequently Bought Together </h5>
                    <div className="flex space-x-4 overflow-x-auto">
                        {product.frequentlyBought.map((item, i) => (
                        <a key={i} href={item.link} className="flex space-x-3 border p-3 rounded w-80 min-w-[300px] shadow-sm">
                            <img src={item.image} alt="Related" className="w-20 h-20 object-cover rounded" />
                            <div>
                                <p className="text-sm">{item.title}</p>
                                <div className="text-sm text-red-600 font-bold">৳ {item.currentPrice}</div>
                                <div className="flex items-center space-x-2 text-xs">
                                    <span className="line-through text-gray-400">৳ {item.oldPrice}</span>
                                    <span className="text-green-600">{item.discount}</span>
                                </div>
                                <div className="text-yellow-500 text-xs">
                                    {"★".repeat(item.rating)} ({item.ratingCount})
                                </div>
                            </div>
                        </a>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="xl:col-span-6 space-y-5">
                    <h4 className="text-2xl font-semibold">{product.title}</h4>
                    <div className="text-xl">
                        <span className="line-through text-gray-400 mr-2">৳ {product.oldPrice}</span>
                        <span className="text-red-600 font-bold">৳ {product.currentPrice}</span>
                    </div>

                    {/* Sizes */}
                    <div>
                    <strong className="block mb-2">Select Size</strong>
                    <div className="flex gap-3">
                        {product.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => handleSizeSelect(size)}
                            className={`px-4 py-2 border rounded ${
                            selectedSize === size ? "bg-black text-white" : "hover:bg-gray-100"
                            }`} >
                            {size}
                        </button>
                        ))}
                    </div>
                    </div>

                    {/* Quantity & Cart */}
                    <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded overflow-hidden">
                        <button onClick={() => setQuantity(Math.max(0, quantity - 1))} className="px-3 py-1 text-xl">
                        −
                        </button>
                        <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="w-10 text-center border-l border-r outline-none"
                        />
                        <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-xl">
                        +
                        </button>
                    </div>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                        <i className="fas fa-plus mr-2"></i>Add To Cart
                    </button>
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-700 space-y-2">
                    {product.description.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                    </div>

                    {/* Specification */}
                    <div>
                    <strong>Detailed Specification</strong>
                    <ul className="list-disc pl-5 text-sm mt-2">
                        {product.specifications.map((spec, i) => (
                        <li key={i}>{spec}</li>
                        ))}
                    </ul>
                    </div>

                    {/* Size Chart */}
                    <div>
                    <strong>Size chart - In inches (Expected Deviation &lt; 3%)</strong>
                    <table className="w-full mt-2 text-sm border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Size</th>
                            <th className="border p-2">Chest</th>
                            <th className="border p-2">Length</th>
                            <th className="border p-2">Sleeve</th>
                        </tr>
                        </thead>
                        <tbody>
                        {product.sizeChart.map((row, i) => (
                            <tr key={i}>
                            <td className="border p-2">{row.size}</td>
                            <td className="border p-2">{row.chest}</td>
                            <td className="border p-2">{row.length}</td>
                            <td className="border p-2">{row.sleeve}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>

                    {/* Mobile Frequently Bought */}
                    <div className="block sm:hidden mt-6">
                    <h5 className="text-lg font-semibold mb-2">Frequently Bought Together</h5>
                    <div className="flex space-x-4 overflow-x-auto">
                        {product.frequentlyBought.map((item, i) => (
                        <a key={i} href={item.link} className="flex space-x-3 border p-3 rounded w-80 min-w-[300px] shadow-sm">
                            <img src={item.image} alt="Related" className="w-20 h-20 object-cover rounded" />
                            <div>
                            <p className="text-sm">{item.title}</p>
                            <div className="text-sm text-red-600 font-bold">৳ {item.currentPrice}</div>
                            <div className="flex items-center space-x-2 text-xs">
                                <span className="line-through text-gray-400">৳ {item.oldPrice}</span>
                                <span className="text-green-600">{item.discount}</span>
                            </div>
                            <div className="text-yellow-500 text-xs">
                                {"★".repeat(item.rating)} ({item.ratingCount})
                            </div>
                            </div>
                        </a>
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

export default ProductDetailsSec





