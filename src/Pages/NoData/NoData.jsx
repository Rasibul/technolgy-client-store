import { Link } from "react-router-dom";


const NoData = () => {
    return (
        <div className='h-screen text-center  items-center'>
        <div className="flex justify-center mx-auto">
            <p className="text-5xl font-bold">This Brand Producte are Not Available</p>
        </div>
        <Link to='/home'>
            <button className=" px-4 py-4 rounded text-white bg-purple-600">Go To Home</button>
        </Link>
    </div>
    );
};

export default NoData;