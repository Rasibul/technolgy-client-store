import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebaseConfig";

export const AutheContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {


// googlelogin
const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
}


const authInfo = {
    googleLogin
}


    return (
        <AutheContext.Provider value={authInfo}>
            {children}
        </AutheContext.Provider>
    );
};

export default AuthProvider;