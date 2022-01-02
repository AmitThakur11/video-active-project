import { createContext, useContext, useState, useReducer } from "react";
import { initialState , userReducer } from "./util";
export const dataContext = createContext();

export default function DataProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [user, userDispatch] = useReducer(userReducer, initialState);

  return (
    <dataContext.Provider
      value={{ loading, setLoading, user, userDispatch, modal, setModal }}
    >
      {children}
    </dataContext.Provider>
  );
}

export const useData = () => useContext(dataContext);
