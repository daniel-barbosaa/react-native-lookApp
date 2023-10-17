import React, {createContext,useState} from 'react';
import App from '../../App';

export const AppContext = createContext({});

const ContextProvider = ({children}) => {
    const DISCOUNT_PERCENTE = 0.10;
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        const existentIndex = cart?.findIndex(p => p.id === product);

        let oldCart = cart;

        //SE EXISTIR O PRODUTO NO CARRINHO
        if (existentIndex !== -1) {
            oldCart[existentIndex] = product;
        } else {
            oldCart.push(product);
        }
        setCart(oldCart);
    };

    const removeFromCart = (productId) => {
        const filteredProduct = cart.filter(p => p.id !== productId);
        setCart(filteredProduct);
    };

    return <AppContext.Provider value={{user, setUser, cart, addToCart, removeFromCart, DISCOUNT_PERCENTE}}>{children}</AppContext.Provider>;
};

export default ContextProvider;




