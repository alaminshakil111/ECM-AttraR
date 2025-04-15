import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; 


const Footermain = () => {

    const footerData = [
        {
          title: 'SITENAME',
          links: [
            'about us',
            'terms & conditions',
            'privacy & policy',
            'faqs',
            'contact us',
          ],
        },
        {
          title: 'MEN',
          links: [
            'short sleeve',
            'long sleeve',
            'polo',
            'shirt',
            'hoodie',
            'comfy trouser',
            'sports trouser',
          ],
        },
        {
          title: 'WOMEN',
          links: [
            'short sleeve',
            'long sleeve',
            'polo',
            'shirt',
            'hoodie',
            'comfy trouser',
            'sports trouser',
          ],
        },
        {
          title: 'KIDS',
          links: [
            'short sleeve',
            'long sleeve',
            'polo',
            'shirt',
            'hoodie',
            'comfy trouser',
            'sports trouser',
          ],
        },
      ];
      const socialLinks = [
        { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
        { icon: <FaInstagram />, href: '#', label: 'Instagram' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter' },
      ];




    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4">
        {footerData.map((section, index) => (
            <div key={index}>
            <div className="footerUl mb-4">
                <span className="text-lg font-semibold uppercase">{section.title}</span>
                <ul className="mt-2 space-y-1 text-sm">
                {section.links.map((link, idx) => (
                    <li key={idx}>
                    <a href=" " className="hover:underline capitalize">
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Only show social icons for SITENAME section */}
            {index === 0 && (
                <div className="socialMediaH mt-4">
                <ul className="flex gap-3">
                    {socialLinks.map((item, idx) => (
                    <li key={idx}>
                        <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black text-lg"
                        aria-label={item.label}
                        >
                        {item.icon}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </div>
        ))}
        </div>
  );

};

export default Footermain;