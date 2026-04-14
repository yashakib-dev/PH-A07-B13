import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center">
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
};

export default StatCard;