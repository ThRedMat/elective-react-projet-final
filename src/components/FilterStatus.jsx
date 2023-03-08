import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup } from 'rsuite';
import { setStatus } from "../states/mangasSlice";

const FiltreStatus = () => {
  const [value, setValue] = useState([]);
  const mangas = useSelector((store) => store.mangas);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setStatus(event))
  }

  return (
    <div className="flex flex-row items-center">
      <div className="text-gray-700 font-bold mr-2">Filter by status:</div>
      <CheckboxGroup
        inline
        name="checkboxList"
        value={value}
        onChange={value => {
          if (value[value.length - 1] === "Finished") {
            delete value[value.indexOf("Publishing")];
          } else if (value[value.length - 1] === "Publishing") {
            delete value[value.indexOf("Finished")];
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
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg "
      >
        <Checkbox value="Finished" className="text-gray-900 font-medium hover:text-gray-700 focus:text-gray-700">Fini</Checkbox>
        <Checkbox value="Publishing" className='text-gray-900 font-medium hover:text-gray-700 focus:text-gray-700'>En cours de publication</Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export default FiltreStatus;
