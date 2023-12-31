import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const products = useLoaderData()
    const handeToAddCart = (p) => {

        fetch('https://technology-store-server.vercel.app/myCart', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(p)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Add To Cart Suceesfuly',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <div className="container px-5 py-24 mx-auto" >
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={products.photo} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" >
                        <h2 className="text-sm title-font text-gray-500 tracking-widest" >ON SALE</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" >{products.name}</h1>
                        <p className="leading-relaxed text-justify">{products.description}</p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-between mt-4">
                            <span className="title-font font-medium text-2xl text-gray-900">Price:${products.price}</span>
                         
                                <button onClick={() => handeToAddCart(products)} className="btn btn-outline btn-primary">Add To Cart</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;