import { Link } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";


const Registation = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Your Name" name="name" required className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" placeholder="Image Url" name="img"  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6 p-0">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                    <h2 className="text-sm">
                        Alredy Have An Account? <Link to="/login" className="label-text-alt link link-hover text-sm">Please Login</Link>
                    </h2>
                    <SocialLogin />
                </form>

            </div>
        </div>
    </div>
    )
};

export default Registation;