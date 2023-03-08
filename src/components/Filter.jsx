import React from 'react';
import FiltreOrder from './FilterOrder';

const Filter = () => {
  return (
    <div className="flex justify-center items-center filter-container">
      <div className="flex justify-between items-center w-full max-w-7xl px-4">
        <FiltreOrder />
      </div>
    </div>
  );
};

export default Filter;
