import { createContext, useState } from "react";

export const ContextApi = createContext(null)

const Provider = ({ children }) => {
    const [products, setProducts] = useState()
    const handelDetails = (p) => {
        setProducts(p)
        return
    }

    const handeToAddCart = (p) => {

        fetch('http://localhost:5000/myCart', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(p)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("add to cart")
                }
            })
    }
    const provideItems = { products, handelDetails, handeToAddCart }
    // console.log(products)

    return (
        <ContextApi.Provider value={provideItems}>
            {children}
        </ContextApi.Provider>
    );
};

export default Provider;