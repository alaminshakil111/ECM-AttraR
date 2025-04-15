import React from "react";
import { HiHome } from "react-icons/hi";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <a href="/" className="flex items-center text-blue-600 hover:underline">
            <HiHome className="mr-1" />
            Home
          </a>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {index === paths.length - 1 ? (
              <span className="text-gray-500">{path.label}</span>
            ) : (
              <a href={path.href} className="text-blue-600 hover:underline">
                {path.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
