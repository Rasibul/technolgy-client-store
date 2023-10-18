import { useContext } from "react";
import { AutheContext } from "../Provider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AutheContext)

    const handelGoogleLogin = (media) => {
        media()
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return (
        <>
        <div className="divider">continue with</div>
        <div className=" flex gap-8">
            <button
            onClick={()=> handelGoogleLogin(googleLogin)}
                className="btn btn-sm btn-neutral mx-auto">Google</button>
        </div>
    </>
    );
};

export default SocialLogin;