import React from 'react';
import FiltreStatus from './FilterStatus';
import FiltreOrder from './FilterOrder';

const Filter = () => {
  return (
    <div className="flex justify-between items-center filter-container">
      <FiltreStatus />
      <FiltreOrder />
    </div>
  );
};

export default Filter;
