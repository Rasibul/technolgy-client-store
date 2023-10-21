import { Link } from "react-router-dom";


const Cart = ({ cart }) => {
    const { name, type, price, photo } = cart
    return (
        <div className="bg-white shadow-md rounded-xl duration-500  hover:shadow-xl"
        >
            <img
                src={photo}
                alt="Product"
                className="h-80  w-fit object-cover rounded-t-xl mx-auto"
            />
            <div className="px-4 py-3 ">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                    {name} / {type}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                    {name}
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                        Price: ${price}
                    </p>
                </div>
                <div className="flex justify-between items-center px-3 pb-5 ">
                    <button className="btn btn-outline btn-primary">CheackOut</button>
                    <Link  >
                        <button className="btn btn-outline btn-primary">Remove Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;