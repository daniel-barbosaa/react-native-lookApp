import React, {createContext} from 'react';
import App from '../../App';

export const AppContext = createContext({});

const ContextProvider = ({children}) => {
    return <AppContext.Provider value={{name: 'Daniel'}}>{children}</AppContext.Provider>;
};

export default ContextProvider;




