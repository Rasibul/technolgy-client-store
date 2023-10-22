import { useLoaderData } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
const MyCart = () => {
    const myCart = useLoaderData() || {}
    // console.log(myCart);
    return (
        <div className="grid gap-5 items-center justify-center sm:grid-cols-2 lg:gird-cols-4 w-fit mx-auto px-2 py-10">
            {
                myCart.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default MyCart;