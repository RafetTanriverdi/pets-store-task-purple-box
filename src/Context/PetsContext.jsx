import React, { createContext, useState,useEffect } from 'react';

 const PetsContext = createContext([]);

export const PetsProvider = ({ children }) => {
  

    return (
        <PetsContext.Provider
            
        >
            {children}
        </PetsContext.Provider>
    );
};
export default PetsContext;