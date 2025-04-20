import React, { useState } from "react";

// import From Local 

import cardpay from '../assets/images/cardpay.png';
import cashDelivery from '../assets/images/cashDelivery.png';
import checkbkash from '../assets/images/checkbkash.jpg';


function CheckOutSec() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        District: "",
        number: "",
        Address: "",
        

      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      };
      
      const paymentMethods = [
        {
          id: "cash",
          label: "Cash on Delivery",
          image: cashDelivery,
        },
        {
          id: "card",
          label: "Card Payment",
          image: cardpay,
        },
        {
          id: "bkash",
          label: "bKash",
          image: checkbkash,
        },
      ];
      const [selectedPayment, setSelectedPayment] = useState("");

    const handlePaymentChange = (id) => {
        setSelectedPayment(id);
    };


    return (
        <div className='checkOutSec'>
            <div className='container px-2 py-2 sm:px-0 '>
                <div className='wrapper grid grid-cols-1 md:grid-cols-2 '>
                    <div className=' w-full '>
                        <h2 className=" text-center text-2xl font-bold " > Checkout Info  </h2>

                        <form onSubmit={handleSubmit} className=" p-4 shadow-lg rounded-lg space-y-4">
                            <h5 className="font-bold "> Contact info </h5>

                            <div>
                                <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className=" flex flex-col md:flex-row md:justify-between gap-1 ">
                                <div className="w-full " >
                                    <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                                </div>
                                <div className="w-full " >
                                    <input
                                    type="number "
                                    name="number"
                                    placeholder="Phone No"
                                    value={formData.number}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                                </div>
                            </div>

                            <div className="shippingInfo">
                                <h5 className="font-bold mb-4 " > Shipping Info  </h5>
                                {/* <div>
                                    <label className="block mb-1 font-medium">Message</label>
                                    <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" ></textarea>
                                </div> */}
                                <div>
                                    <input
                                    type="text"
                                    name="Address"
                                    placeholder=" Detailed Address"
                                    value={formData.Address}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                                </div>
                                <div className=" flex flex-col md:flex-row gap-4 ">
                                    <div className="w-full " >
                                        <input
                                        type="text"
                                        name="District"
                                        placeholder=" District"
                                        value={formData.District}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                                    </div>
                                    <div className="w-full " >
                                        <input
                                        type="number "
                                        name="number"
                                        placeholder="Alt. Phone No"
                                        value={formData.number}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                                    </div>
                                </div>
                                <div>
                                    <input
                                    name="text"
                                    placeholder="note for sitename"
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" ></input>
                                </div>
                            </div>
                            <div className=" bg-gray-200 p-4 rounded-md text-center">
                                <div className="text-lg font-medium">Your total payable amount is</div>
                                <strong className="text-[20px] font-[system-ui]" style={{ color: "lightseagreen" }}>
                                    ৳690
                                </strong>
                                <h5 className="text-[17px] my-2 font-semibold">Breakdown</h5>

                                <table className="w-full text-sm border bg-gray-100 border-gray-300">
                                    <thead>
                                    <tr className="bg-gray-300">
                                        <th className="text-center text-[13px] border border-gray-300 py-1">Purpose</th>
                                        <th className="text-center text-[13px] border border-gray-300 py-1">Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="text-center border border-gray-300 py-1">Total</td>
                                        <td className="text-center border border-gray-300 text-green-600 py-1">৳630</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center border border-gray-300 py-1">Shipping</td>
                                        <td className="text-center border border-gray-300 text-green-600 py-1">৳60</td>
                                    </tr>
                                    <tr className="hidden">
                                        <td className="text-center border border-gray-300 py-1">Discount</td>
                                        <td className="text-center border border-gray-300 text-red-500 py-1"></td>
                                    </tr>
                                    <tr className="hidden">
                                        <td className="text-center border border-gray-300 py-1">Discount ()</td>
                                        <td className="text-center border border-gray-300 text-red-500 py-1">৳</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-4">
                                <h5 className="font-semibold text-[15px] pb-1">Payment Options</h5>
                                <div className="flex flex-wrap gap-2">
                                    {paymentMethods.map((method) => (
                                    <label
                                        key={method.id}
                                        className={`relative flex items-center justify-center w-[150px] h-[60px] bg-gray-100 rounded-md shadow-md cursor-pointer transition duration-300 hover:shadow-lg border ${
                                        selectedPayment === method.id ? "border-blue-500" : "border-white"
                                        }`} >
                                        <input
                                        type="radio"
                                        name="payment"
                                        value={method.id}
                                        checked={selectedPayment === method.id}
                                        onChange={() => handlePaymentChange(method.id)}
                                        className=" absolute left-1 "  />
                                        <img
                                        src={method.image}
                                        alt={method.label}
                                        className="w-[80%] absolute top-1/2 left-[26px] -translate-y-1/2"
                                        />
                                    </label>
                                    ))}
                                </div>
                            </div>                            
                        </form>

                        <div className="space-y-4">
                            {/* Coupon Input Section */}
                            <div className="py-2">
                                <label className="block font-semibold text-[15px] mb-1">Got any Coupon Code</label>
                                <div className="flex gap-2 flex-wrap">
                                <input
                                    type="text"
                                    placeholder="Enter Coupon"
                                    className="rounded border border-gray-400 bg-gray-100 text-sm px-2 py-1 min-h-[32px] w-1/2"  />
                                <button
                                    type="button"
                                    className="rounded border border-gray-800 bg-black text-white text-sm px-2 py-1 min-h-[32px] w-1/2"  >
                                    Add Coupon
                                </button>
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="flex items-start gap-2">
                                <input
                                type="checkbox"
                                id="agreeTerms"
                                />
                                <span className="text-sm font-[cursive]">
                                I agree to{" "}
                                <a href="#" target="_blank" className="text-blue-600 underline">
                                    Terms & Conditions
                                </a>
                                ,{" "}
                                <a href="#" target="_blank" className="text-blue-600 underline">
                                    Refund Policy
                                </a>{" "}
                                and{" "}
                                <a href="#" target="_blank" className="text-blue-600 underline">
                                    Privacy Policy
                                </a>{" "}
                                of Sitename.
                                </span>
                            </div>
                        </div>


                    </div>
                    <div className=' w-full '>
                        <h1> 2 </h1>
                    </div>


                </div>




            </div>

        </div>
    );
}

export default CheckOutSec;