// Dropdown.js
import React from 'react';

const Dropdown = ({ options, selectedOption, onChange }) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 bg-transparent focus:outline-none text-[30px] w-[650px]"
    >
      {options.map((option) => (
        <option key={option.price} value={option.price} className=''>
            {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
