import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup } from 'rsuite';
import {setStatus} from "../states/mangasSlice";

const FiltreStatus = () => {
    const [value, setValue] = useState([]);
    const mangas = useSelector((store) => store.mangas);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setStatus(event))
    }
    return (
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
      >
        <Checkbox value="Finished">Filter by status "Finished"</Checkbox>
        <Checkbox value="Publishing">Filter by status "Publishing"</Checkbox>
      </CheckboxGroup>
      
    );
  };

export default FiltreStatus;

