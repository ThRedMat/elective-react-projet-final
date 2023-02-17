import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../states/mangasSlice';
import "../styles/searchBar.css"
const SearchBar = ({ placeholder }) => {
  const mangas = useSelector((store) => store.mangas);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <>
      <div className="input-group my-5">
        <input
          type="text"
          className="bg-gray-100 focus:bg-white border border-gray-300 focus:border-indigo-500 rounded-lg py-2 px-4 w-full outline-none transition-all duration-300 ease-in-out"
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
