import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../states/mangasSlice";

const SearchBar = ({ placeholder }) => {
  const mangas = useSelector((store) => store.mangas);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value))
  }

  return (
    <>
      <div className="input-group my-5">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={mangas.search}
          onChange={handleChange}
        />
      </div>

      {/* <div>Vous recherchez : {mangas.search}</div> */}
    </>
  );
};

export default SearchBar;