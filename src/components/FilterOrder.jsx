import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup } from 'rsuite';
import {setOrder} from "../states/mangasSlice";

const FiltreOrder = () => {
    const [value, setValue] = useState([]);
    const mangas = useSelector((store) => store.mangas);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setOrder(event))
    }
    return (
      <CheckboxGroup
        inline
        name="checkboxList"
        value={value}
        onChange={value => {
            if (value[value.length-1] === "alphabetical order") {
                delete value[value.indexOf("reverse alphabetical order")];
                delete value[value.indexOf("rank order")];
            } else if (value[value.length-1] === "reverse alphabetical order") {
                delete value[value.indexOf("alphabetical order")];
                delete value[value.indexOf("rank order")];
            } else if (value[value.length-1] === "rank order") {
                delete value[value.indexOf("alphabetical order")];
                delete value[value.indexOf("reverse alphabetical order")];
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
        <Checkbox value="alphabetical order">Sort by alphabetical order</Checkbox>
        <Checkbox value="reverse alphabetical order">Sort by reverse alphabetical order</Checkbox>
        <Checkbox value="rank order">Sort by rank order</Checkbox>
      </CheckboxGroup>
      
    );
  };

export default FiltreOrder;

