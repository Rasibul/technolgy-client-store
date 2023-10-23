import { useLoaderData } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import { useState } from "react";
import Swal from "sweetalert2";
const MyCart = () => {
    const myCart = useLoaderData() || {}
    const [users, setUsers] = useState(myCart)
    const handelDelete = _id => {
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
                fetch(`https://technology-store-server.vercel.app/myCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success',

                            )
                            const remaing = users.filter(user => user._id !== _id)
                            setUsers(remaing)
                        }
                    })

            }
        })

    }
    return (
        <div className="grid gap-5 items-center justify-center sm:grid-cols-2 lg:gird-cols-4 w-fit mx-auto px-2 py-10">
            {
                myCart.map(cart => <Cart key={cart._id} cart={cart} handelDelete={handelDelete} ></Cart>)
            }
        </div>
    );
};

export default MyCart;