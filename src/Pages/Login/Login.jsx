import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Login = () => {
    const location = useLocation ()
    const navigate = useNavigate()
    const { signIn } = useAuth()
    const handelLogin = (e) => {
        e.preventDefault()
        const password = e.target.password.value
        const email = e.target.email.value
        console.log(email, password)



        // validation
        if (password.length < 6) {
            toast.error('password must be at least 6 character')
            return
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            toast.error('password must be at least one special character')
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('password must be at least one captial character')
        }

       // creating a new user

       signIn(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/home');
                
            })
            .catch(error => console.log(error))
    }
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </form>

                    </div>
                </div>
            </div>
        );
    };

    export default Login;