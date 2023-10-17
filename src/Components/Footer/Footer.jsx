
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <div className="flex items-center gap-2">
                    <img className="w-8 sm:w-10 rounded-full" src="https://i.ibb.co/5j583Hx/Untitled-design.png" alt="" />
                    <h2 className="text-base sm:text-3xl  font-bold">ISOLA<span className="text-base sm:text-3xl text-purple-800 font-bold italic">
                        TECh
                    </span>
                    </h2>

                </div>
                <p>Isolate Technology Ltd.<br />Providing reliable tech since 2000</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;