"use client"

import React, {createContext, useContext} from 'react';


//Context
export const AppContext = createContext({});

//Provider
export const AppContextProvider = ({ children }) => {
    //Estados de mi aplicacion
    const [user, setUser] = React.useState("userdata!");
    const [cart, setCart] = React.useState({});
    const [variableState, setVariableState] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(true);
    
    //ComponentDidMouunt
    React.useEffect(() => {
        
    }, []);

    //
    const values = React.useMemo(() => (
        {
            variableState,      // States que seran visibles en el contexto.
            setVariableState,   // Funciones que son exportadas para manejo externo.
            user,
            setUser,
            cart,
            setCart,
            isOpen, 
            setIsOpen
        }),
        [variableState]);   // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export const useAppContext=()=> {
    let {isOpen} = useContext(AppContext);

    if (!isOpen) {
        console.error('Error deploying App Context!!!');
    }

    return (context);
}

export default useAppContext;



