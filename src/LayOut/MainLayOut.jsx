import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";


const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-[1300px]  mx-auto">
                <div className="mx-5">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;