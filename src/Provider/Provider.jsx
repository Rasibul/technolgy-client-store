import { createContext, useState } from "react";

export const ContextApi = createContext(null)

const Provider = ({ children }) => {
    const [products, setProducts] = useState()
    const handelDetails = (p) => {
        setProducts(p)
        return
    }
    const provideItems = { products, handelDetails }
    console.log(products)

    return (
        <ContextApi.Provider value={provideItems }>
            {children}
        </ContextApi.Provider>
    );
};

export default Provider;