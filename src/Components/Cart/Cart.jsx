import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ({ cart }) => {
    const { _id, name, brand, type, price, photo } = cart
    const handelDelte = _id => {

        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }

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
                    {brand} / {type}
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
                        <button
                            onClick={() => handelDelte(_id)}
                            className="btn btn-outline btn-primary">Remove Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;