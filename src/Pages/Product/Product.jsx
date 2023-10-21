import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ContextApi } from "../../Provider/Provider";



const Product = () => {
    const allProducts = useLoaderData()
   const {handelDetails }= useContext(ContextApi)
   const handelDetailsbtn = (p) => {
    handelDetails(p)
   }
    return (
        <div className="grid gap-5 items-center justify-center sm:grid-cols-2 lg:gird-cols-4 w-fit mx-auto  py-10">
            {
                allProducts.map(products => {
                    const { _id, name, brand, type, ratting, price, photo } = products
                    return (
                        <div
                            key={_id}

                            className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={photo}
                                alt="Product"
                                className="h-80  w-fit object-cover rounded-t-xl mx-auto"
                            />
                            <div className="px-4 py-3 ">
                                <span className="text-gray-400 mr-3 uppercase text-xs">
                                    {brand} / {type}
                                </span>
                                <p className="text-lg font-bold text-black truncate block capitalize">
                                    {name}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                                        Price: ${price}
                                    </p>
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                                        Ratting: {ratting} star
                                    </p>
                                </div>
                                <div className="flex justify-between items-center px-3 pb-5 ">
                                    <button className="btn btn-outline btn-primary">Update</button>
                                    <Link   to='/details' >
                                        <button onClick={()=> handelDetailsbtn(products)} className="btn btn-outline btn-primary">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
};

export default Product;