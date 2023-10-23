import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, name, brand, type,description, ratting, price, photo } = product
    const handelUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const type = form.type.value
        const ratting = form.ratting.value
        const description = form.description.value
        const price = form.price.value
        const photo = form.photo.value
        const updatedProduct = { name, brand, type, ratting, description, price, photo }
        // console.log(newProduct)

        fetch(`https://technology-store-server.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'success!',
                        text: 'Product Updated Sucessfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-10">
            <h2 className="text-3xl font-bold text-center">Upadte Product</h2>
            <form onSubmit={handelUpdateProduct}>
                {/* form row Name and Brand Name */}
                <div className="md:flex gap-5 mb-8 ">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row for product type and price */}
                <div className="md:flex gap-5 mb-8 ">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* from row for short description and Ratting */}
                <div className="md:flex gap-5 mb-8 ">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <label className="input-group">
                            <input type="ratting" name="ratting" defaultValue ={ratting}placeholder="Ratting" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" mb-8 ">
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className=" px-4 py-4 rounded btn-block bg-blue-600 text-white" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;