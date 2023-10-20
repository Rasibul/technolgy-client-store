import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-[1300px]  mx-auto">
                <div className="sm:mx-5">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayOut;