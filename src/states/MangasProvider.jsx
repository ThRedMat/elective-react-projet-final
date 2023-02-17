import React, {createContext, useReducer} from 'react';
import {mangasReducer, initialState} from "./mangaReducer";

export const MangasContext = createContext(null);

const MangasProvider = ({children}) => {
  const [state, dispatch] = useReducer(mangasReducer, initialState);

  return (
    <MangasContext.Provider value={[state, dispatch]}>
      {children}
    </MangasContext.Provider>
  );
};

export default MangasProvider;