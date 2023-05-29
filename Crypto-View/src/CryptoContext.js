import React from 'react'
import { createContext } from 'react'

import { useContext, useEffect, useState } from "react";

export const Crypto = createContext()

export const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);
  
  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
        {children}
    </Crypto.Provider>
  )
};

export const CryptoState = () => {
    return useContext(Crypto);
  };