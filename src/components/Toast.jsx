import React from "react";

const Toast = ({ message, type }) => {
  const getColor = (type) => {
    switch (type) {
      case 'error': return 'border-red-500 text-red-600 bg-red-50/10';
      case 'success': return 'border-green-500 text-green-600 bg-green-50/10';
      case 'loading': return 'border-blue-500 text-blue-600 bg-blue-50/10';
      default: return 'border-gray-500 text-gray-600 bg-gray-50/10';
    }
  };

  return (
    <div
      className={`px-4 py-3 rounded-lg shadow-lg border-2 font-medium text-sm max-w-sm backdrop-blur-sm ${getColor(type)}`}
      style={{ animation: 'slideInFromTop 0.3s ease-out' }}
    >
      {message}
    </div>
  );
};

export default Toast;
