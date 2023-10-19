import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import BrandCart from "../../Components/BrandCart/BrandCart";
import ContactUs from "../../Components/ContactUs/ContactUs";
import MemberShip from "../../Components/MemberShipCard/MemberShip";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-base sm:text-3xl font-bold py-5">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                {
                    brands.map(product => <BrandCart key={product.id} product={product}></BrandCart>)
                }
            </div>
            <MemberShip></MemberShip>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;