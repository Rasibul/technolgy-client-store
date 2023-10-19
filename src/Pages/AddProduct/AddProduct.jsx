
const AddProduct = () => {
    const handelFromItem = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const catagorey = form.catagorey.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = { name, quantity, supplier, taste, catagorey, details, photo }
        console.log(newCoffee)
    }
    return (
        <div className="bg-[#F4F3F0] p-10">
            <h2 className="text-3xl font-bold text-center">Add Product</h2>
            <form onSubmit={handelFromItem}>
                {/* form row Name and Brand Name */}
                <div className="md:flex gap-5 mb-8 ">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Brand Name" className="input input-bordered w-full" />
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
                            <input type="text" name="supplier" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="catagorey" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Ratting" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" mb-8 ">
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className=" px-4 py-4 rounded btn-block bg-blue-600 text-white" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;