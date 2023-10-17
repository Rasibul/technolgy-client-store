import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import BrandCart from "../../Components/BrandCart/BrandCart";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 ">
                {
                    brands.map(product => <BrandCart key={product.id} product={product}></BrandCart>)
                }
            </div>
        </div>
    );
};

export default Home;