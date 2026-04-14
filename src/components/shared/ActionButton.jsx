import React from 'react';

const ActionButton = ({ label }) => {
 return (
    <button className="border rounded-xl p-4 hover:bg-gray-50 transition">
      {label}
    </button>
  );
};

export default ActionButton;