import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='h-screen text-center  items-center'>
            <div>
                <span className="text-5xl font-bold">404</span>
                <p className="text-5xl font-bold">Data is Not Found</p>
            </div>
            <Link to='/home'>
                <button className=" px-4 py-4 rounded text-white bg-purple-600">Go To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;