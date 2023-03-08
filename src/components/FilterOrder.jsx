import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup } from 'rsuite';
import { setOrder } from '../states/mangasSlice';
import '../styles/mangasList.css';
import FiltreStatus from './FilterStatus';

const FiltreOrder = () => {
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setOrder(event));

  };
  return (

    <CheckboxGroup
      inline
      name="checkboxList"
      value={value}
      onChange={value => {
        if (value[value.length - 1] === 'alphabetical order') {
          delete value[value.indexOf('reverse alphabetical order')];
          delete value[value.indexOf('rank order')];
        } else if (value[value.length - 1] === 'reverse alphabetical order') {
          delete value[value.indexOf('alphabetical order')];
          delete value[value.indexOf('rank order')];
        } else if (value[value.length - 1] === 'rank order') {
          delete value[value.indexOf('alphabetical order')];
          delete value[value.indexOf('reverse alphabetical order')];
        }
        let newValue = [];
        for (let i = 0; i < value.length; i++) {
          const element = value[i];
          if (element !== undefined) {
            newValue.push(element);
          }
        }
        value = newValue;
        console.log(value);
        setValue(value);
        handleChange(value);

      }
      }

      className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <FiltreStatus></FiltreStatus>
      <Checkbox
        value="alphabetical order"
        className="text-gray-900 font-medium hover:text-gray-700 focus:text-gray-700"
      >
        Trier par ordre alphabétique
      </Checkbox>
      <Checkbox
        value="reverse alphabetical order"
        className="text-gray-900 font-medium hover:text-gray-700 focus:text-gray-700"
      >
        Trier par ordre alphabétique inversé
      </Checkbox>
      <Checkbox
        value="rank order"
        className="text-gray-900 font-medium hover:text-gray-700 focus:text-gray-700"
      >
        Trier par rang
      </Checkbox>
    </CheckboxGroup>
  );
};

export default FiltreOrder;
