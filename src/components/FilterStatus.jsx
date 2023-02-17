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
          if (value[value.length-1] === "Finished") { 
            delete value[value.indexOf("Publishing")];
          } else if (value[value.length-1] === "Publishing") {
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
        className="ml-2 bg-white rounded-md shadow-sm p-1"
      >
        <Checkbox value="Finished" className="mr-2">Finished</Checkbox>
        <Checkbox value="Publishing">Publishing</Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export default FiltreStatus;
