import React, {createContext,useState} from 'react';
import App from '../../App';

export const AppContext = createContext({});

const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    return <AppContext.Provider value={{user, setUser}}>{children}</AppContext.Provider>;
};

export default ContextProvider;




