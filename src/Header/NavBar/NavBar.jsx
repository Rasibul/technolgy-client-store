import { Link } from "react-router-dom";

const Menus = () => {
    const links = ['home', 'addProduct', 'myCart'];
    return (
        <>
            {
                links.map(link => <li key={link}>
                    <Link to={`/${link}`} className="btn btn-sm  btn-ghost">{link}</Link>
                </li>)
            }
        </>
    )
}
const NavBar = () => {
    const user = false
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Menus />
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-8 sm:w-10 rounded-full" src="https://i.ibb.co/5j583Hx/Untitled-design.png" alt="" />
                        <h2 className="text-base sm:text-3xl  font-bold">ISOLA<span className="text-base sm:text-3xl text-purple-800 font-bold italic">
                            TECh
                        </span>
                        </h2>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Menus />
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/y0yrnYQ/1681283571946.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">Farhan</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;
